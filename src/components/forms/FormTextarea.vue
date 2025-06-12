<!-- components/forms/FormTextarea.vue -->
<template>
  <div class="form-group">
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :class="['form-textarea', { error: error }]"
    ></textarea>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  placeholder: String,
  error: String
})

defineEmits(['update:modelValue'])
</script>