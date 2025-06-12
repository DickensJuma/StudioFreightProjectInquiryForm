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

<style lang="scss" scoped>
  @use '../../assets/styles/_variables' as *;

/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
}

.logo {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
}

.contact-btn {
    background: none;
    border: 1px solid #fff;
    color: #fff;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 8px;
}

.contact-btn:hover {
    border-color: #666;
    background: rgba(255, 255, 255, 0.1);
}
</style>