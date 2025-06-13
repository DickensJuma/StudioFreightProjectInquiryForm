<!-- components/forms/TagButtonGroup.vue -->
<template>
  <div class="button-group" :class="{ error: showError }">
    <button
      v-for="option in options"
      :key="option"
      type="button"
      :class="['tag-btn', { active: modelValue.includes(option) }]"
      @click="toggleTag(option)"
    >
      {{ option.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: Array,
  options: Array,
  required: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'validation'])
const showError = ref(false)

function toggleTag(tag) {
  const newValue = [...props.modelValue]
  const index = newValue.indexOf(tag)
  
  if (index > -1) {
    newValue.splice(index, 1)
  } else {
    newValue.push(tag)
  }
  
  emit('update:modelValue', newValue)
  validate(newValue)
}

function validate(value) {
  if (props.required) {
    const isValid = value && value.length > 0
    showError.value = !isValid
    emit('validation', isValid)
    return isValid
  }
  return true
}

// Watch for changes in modelValue to validate
watch(() => props.modelValue, (newValue) => {
  validate(newValue)
}, { immediate: true })
</script>

<style lang="scss" scoped>
@use '../../assets/styles/_variables' as *;

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 15px;
  position: relative;

  &.error {
    .tag-btn {
      border-color: #ff4444;
    }
  }
}

.tag-btn {
  background: none;
  border: 1px solid #fff;
  color: #fff;
  padding: 8px 16px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 25px;
  font-weight: bold;
}

.tag-btn.active,
.tag-btn:hover {
  border-color: #666;
  color: #00ff88;
  border-color: #00ff88;
}

.error-message {
  color: #ff4444;
  font-size: 12px;
  margin-top: 5px;
  width: 100%;
}
</style>