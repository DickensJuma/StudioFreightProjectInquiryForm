<!-- components/layout/AppSidebar.vue -->
<template>
  <div class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-header">
      <div class="sidebar-title"></div>
      <button class="close-btn" @click="$emit('close')">CLOSE</button>
    </div>

    <div class="form-container">
      <ProjectInquiryForm @submit="handleFormSubmit" />
    </div>
  </div>
</template>

<script setup>
import ProjectInquiryForm from '../forms/ProjectInquiryForm.vue'

defineProps({
  isOpen: Boolean
})

defineEmits(['close'])

function handleFormSubmit(formData) {
  console.log('Form submitted:', formData)
  // Handle form submission logic
}
</script>