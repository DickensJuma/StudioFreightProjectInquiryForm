<!-- components/ui/FaqSection.vue -->
<template>
  <div class="faq-section">
    <div class="section-title">FAQS</div>
    
    <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
      <button type="button" class="faq-question" @click="toggleFaq(index)">
        {{ faq.question }}
        <span class="faq-icon" ref="icons" :class="{ rotated: openFaq === index }">[+]</span>
      </button>
      <div class="faq-answer" ref="answers" :class="{ active: openFaq === index }" style="display: none;">
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { gsap } from 'gsap'

defineProps({
  faqs: Array
})

const openFaq = ref(null)
const answers = ref([])
const icons = ref([])

// Initialize all FAQs as closed
onMounted(() => {
  answers.value.forEach(answer => {
    answer.style.display = 'none'
    gsap.set(answer, { height: 0, opacity: 0 })
  })
})

function toggleFaq(index) {
  const wasOpen = openFaq.value === index
  openFaq.value = wasOpen ? null : index

  // Animate the icon
  gsap.to(icons.value[index], {
    rotation: wasOpen ? 0 : 45,
    duration: 0.3,
    ease: 'power2.out'
  })

  // Animate the answer
  if (wasOpen) {
    gsap.to(answers.value[index], {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        answers.value[index].style.display = 'none'
      }
    })
  } else {
    answers.value[index].style.display = 'block'
    gsap.fromTo(answers.value[index], 
      { height: 0, opacity: 0 },
      { 
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      }
    )
  }
}

// Watch for changes in openFaq to handle animations
watch(openFaq, (newIndex, oldIndex) => {
  if (oldIndex !== null && oldIndex !== newIndex) {
    // Close previously opened FAQ
    gsap.to(answers.value[oldIndex], {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        answers.value[oldIndex].style.display = 'none'
      }
    })
    gsap.to(icons.value[oldIndex], {
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
})
</script>

<style lang="scss" scoped>
@use '../../assets/styles/_variables' as *;

.faq-section {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #333;
}

.faq-item {
  margin-bottom: 20px;
  border-bottom: 1px solid #222;
  padding-bottom: 15px;
}

.faq-question {
  background: none;
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question:hover {
  color: #00ff00;
}

.faq-answer {
  color: #999;
  font-size: 14px;
  line-height: 1.6;
  margin-top: 10px;
  padding-left: 0;
  overflow: hidden;
}

.faq-icon {
  font-size: 14px;
  font-weight: 300;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    min-width: auto;
    right: -100%;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .header {
    padding: 15px 20px;
  }

  .project-inquiry h1 {
    font-size: 36px;
  }
}
</style>