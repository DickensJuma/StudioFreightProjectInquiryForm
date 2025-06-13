<!-- components/ui/FaqSection.vue -->
<template>
  <div class="faq-section">
    <div class="section-title">FAQS</div>
    
    <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
      <button type="button"  class="faq-question" @click="toggleFaq(index)">
        {{ faq.question }}
        <span class="faq-icon" :class="{ rotated: openFaq === index }">+</span>
      </button>
      <div class="faq-answer" :class="{ active: openFaq === index }">
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  faqs: Array
})

const openFaq = ref(null)

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<style lang="scss" scoped>
  @use '../../assets/styles/_variables' as *;

/* FAQ Section */
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
    transition: color 0.3s ease;
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
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    opacity: 0;
}

.faq-answer.active {
    max-height: 200px;
    opacity: 1;
    padding-bottom: 10px;
}

.faq-icon {
    font-size: 16px;
    transition: transform 0.3s ease;
}

.faq-icon.rotated {
    transform: rotate(45deg);
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