import { ref } from 'vue'

export function useFormValidation() {
  const errors = ref({})

  function validateForm(form) {
    const newErrors = {}

    if (!form.firstName?.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!form.lastName?.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!form.email?.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!form.company?.trim()) {
      newErrors.company = 'Company is required'
    }
    
    if (!form.description?.trim()) {
      newErrors.description = 'Project description is required'
    }

    errors.value = newErrors
    return Object.keys(newErrors).length === 0
  }

  function resetErrors() {
    errors.value = {}
  }

  return {
    errors,
    validateForm,
    resetErrors
  }
}