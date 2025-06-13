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

<style lang="scss" scoped>
  @use '../../assets/styles/_variables' as *;

  .form-group {
    position: relative;
}

.form-group.full-width {
    grid-column: 1 / -1;
}

.form-input,
.form-select,
.form-textarea {
    width: 100%;
    background: #000;
    border: 1px solid #fff;
    color: #fff;
    padding: 12px;
    font-size: 14px;
    outline: none;
    transition: all 0.3s ease;
    border-radius: 8px;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    background: #111;
    border-color: #00ff88;
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
}

.form-select {
    appearance: none;
    cursor: pointer;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23666"><path d="M7 10l5 5 5-5z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 16px;
}

.section-title {
  font-size: medium;
  font-size: 12px;
  margin-bottom: 5px;
  color: gray

}

.element {
  font-family: $font-family-light;
}

</style>