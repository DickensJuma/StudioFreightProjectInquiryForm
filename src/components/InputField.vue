<template>
  <div class="input-field">
    <label>{{ label }}</label>
    <component
      :is="type === 'textarea' ? 'textarea' : 'input'"
      :type="type === 'textarea' ? undefined : type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: String,
  type: {
    type: String,
    default: 'text'
  },
  error: String
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
@use '../assets/styles/variables';

.input-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
  margin-bottom: 4px;
  color: variables.$primary-color;
  font-family: variables.$font-family;
}

input,
textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  font-family: variables.$font-family;
  font-size: 1rem;
  border-radius: 4px;
  transition: border-color 0.2s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: variables.$primary-color;
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