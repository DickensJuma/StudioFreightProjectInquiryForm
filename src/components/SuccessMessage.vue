<template>
  <div class="success-container">
    <h1>Success!</h1>
    <p>Your message has been submitted successfully.</p>
    <router-link to="/" class="back-button">Go Back to Form</router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('.success-container', {
    // opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
  })
})
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables';

.success-container {
  text-align: center;
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
}

h1 {
  color: variables.$primary-color;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 2rem;
  font-family: variables.$font-family;
}

.back-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: variables.$primary-color;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: opacity 0.2s;
}

.back-button:hover {
  opacity: 0.8;
}
</style>