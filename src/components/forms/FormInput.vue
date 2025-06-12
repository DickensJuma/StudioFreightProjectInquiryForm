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

input,
textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  font-family: $font-family;
  font-size: 1rem;
  border-radius: 4px;
  transition: border-color 0.2s;
  width: 90%;
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