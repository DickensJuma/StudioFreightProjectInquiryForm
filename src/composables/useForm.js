import { reactive, computed } from 'vue'

export function useForm(initialState, validationRules) {
  const form = reactive({ ...initialState })
  const errors = reactive({})
  const touched = reactive({})
  
  const validate = (field) => {
    if (validationRules[field]) {
      const error = validationRules[field](form[field])
      if (error) {
        errors[field] = error
      } else {
        delete errors[field]
      }
    }
  }
  
  const validateAll = () => {
    Object.keys(validationRules).forEach(validate)
    return Object.keys(errors).length === 0
  }
  
  const isValid = computed(() => Object.keys(errors).length === 0)
  
  return {
    form,
    errors,
    touched,
    validate,
    validateAll,
    isValid
  }
}