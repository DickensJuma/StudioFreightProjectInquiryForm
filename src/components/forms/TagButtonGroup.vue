
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
<style lang="scss" scoped>
  @use '../../assets/styles/_variables' as *;
.button-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 15px;
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
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}


</style>