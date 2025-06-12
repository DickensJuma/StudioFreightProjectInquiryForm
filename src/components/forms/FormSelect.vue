<!-- components/forms/FormSelect.vue -->
<template>
  <div class="form-group">
    <div v-if="label" class="section-title">{{ label }}</div>
    <div class="dropdown-container">
      <select
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
        class="form-select"
      >
        <option value="">{{ placeholder || 'SELECT' }}</option>
        <option 
          v-for="option in options" 
          :key="option.value || option"
          :value="option.value || option"
        >
          {{ option.label || option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: [String, Number],
  options: Array,
  placeholder: String,
  label: String
})

defineEmits(['update:modelValue'])
</script>
