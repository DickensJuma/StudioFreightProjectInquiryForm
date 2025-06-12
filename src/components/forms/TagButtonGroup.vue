
<!-- components/forms/TagButtonGroup.vue -->
<template>
  <div class="button-group">
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
const props = defineProps({
  modelValue: Array,
  options: Array
})

const emit = defineEmits(['update:modelValue'])

function toggleTag(tag) {
  const newValue = [...props.modelValue]
  const index = newValue.indexOf(tag)
  
  if (index > -1) {
    newValue.splice(index, 1)
  } else {
    newValue.push(tag)
  }
  
  emit('update:modelValue', newValue)
}
</script>
