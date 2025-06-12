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
  transition: border-color 0.3s, background 0.3s, color 0.3s;

  &:focus {
    background: #111;
    border-color: #00ff88;
    color: #fff;
    outline: none;
  }

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