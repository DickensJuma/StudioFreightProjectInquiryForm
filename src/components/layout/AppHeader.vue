<!-- components/layout/AppHeader.vue -->
<template>
  <header class="header">
    <div class="logo">STUDIO</div>
    <button class="contact-btn" @click="$emit('open-sidebar')">
      CONTACT
    </button>
  </header>
</template>

<script setup>
defineEmits(['open-sidebar'])
</script>