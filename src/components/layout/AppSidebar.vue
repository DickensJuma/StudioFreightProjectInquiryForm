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


<style lang="scss" scoped>
@use '../../assets/styles/_variables' as *;

.form-container {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;

}

.sidebar-header {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: #111;
  z-index: 10;
}

.sidebar-title {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
}

/* Scrollbar */
.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: #111;
}

.sidebar::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.close-btn {
  background: none;
  border: 1px solid #00ff00;
  color: #00ff00;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.close-btn:hover {
  background: rgba(0, 255, 0, 0.1);
}

/* Responsive */
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