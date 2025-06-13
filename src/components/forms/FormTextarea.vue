<!-- components/forms/FormTextarea.vue -->
<template>
  <div class="form-group">
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :class="['form-textarea', { error: error }]"
      ref="textarea"
      @focus="handleFocus"
      @blur="handleBlur"
    ></textarea>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'

defineProps({
  modelValue: String,
  placeholder: String,
  error: String
})

defineEmits(['update:modelValue'])

const textarea = ref(null)

function handleFocus() {
  gsap.to(textarea.value, {
    backgroundColor: '#111',
    borderColor: '#00ff88',
    color: '#fff',
    duration: 0.3,
    ease: 'power2.out'
  })
}

function handleBlur() {
  gsap.to(textarea.value, {
    backgroundColor: '#000',
    borderColor: '#333',
    color: '#fff',
    duration: 0.3,
    ease: 'power2.out'
  })
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/_variables' as *;
.form-group {
  position: relative;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.error-message {
  color: #ff4444;
  font-size: 12px;
  margin-top: 5px;
}

.form-textarea {
  width: 100%;
  background: #000;
  border: 1.5px solid #333;
  color: #fff;
  padding: 16px 14px;
  font-size: 15px;
  border-radius: 10px;
  min-height: 120px;
  resize: vertical;
  outline: none;

  &.error {
    border-color: #ff4444 !important;
  }

  &::placeholder {
    color: #888;
    opacity: 1;
    font-size: 15px;
    letter-spacing: 0.5px;
  }
}
</style>