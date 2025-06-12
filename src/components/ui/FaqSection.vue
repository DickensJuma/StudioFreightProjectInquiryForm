<!-- components/ui/FaqSection.vue -->
<template>
  <div class="faq-section">
    <div class="section-title">FAQS</div>
    
    <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
      <button class="faq-question" @click="toggleFaq(index)">
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