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
    />
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup>
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
</script>