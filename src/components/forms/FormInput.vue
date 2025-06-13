<!-- components/forms/FormInput.vue -->
<template>
  <div class="form-group" :class="{ 'full-width': fullWidth }">
    <div v-if="label" class="section-title">{{ label }}</div>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :class="['form-input', { error: error }]"
      :data-field="dataField"
      ref="input"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'

defineProps({
  modelValue: [String, Number],
  type: { type: String, default: 'text' },
  placeholder: String,
  label: String,
  error: String,
  fullWidth: Boolean,
  dataField: String
})

defineEmits(['update:modelValue'])

const input = ref(null)

function handleFocus() {
  gsap.to(input.value, {
    backgroundColor: '#111',
    borderColor: '#00ff88',
    color: '#fff',
    duration: 0.3,
    ease: 'power2.out'
  })
}

function handleBlur() {
  gsap.to(input.value, {
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
    width: 100%;
  
}

.form-group.full-width {
    grid-column: 1 / -1;

    
}

.input-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
  margin-bottom: 4px;
  color: $primary-color;
  font-family: $font-family;
}
.section-title {
  font-size: medium;
font-size: 12px;
  margin-bottom: 5px;
  color: gray;
}

.form-input {
  width: 90%;
  background: #000;
  border: 1.5px solid #333;
  color: #fff;
  padding: 16px 14px;
  font-size: 15px;
  border-radius: 10px;
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

input:focus,
textarea:focus {
  outline: none;
  border-color: $primary-color;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.error {
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 4px;
}
</style>