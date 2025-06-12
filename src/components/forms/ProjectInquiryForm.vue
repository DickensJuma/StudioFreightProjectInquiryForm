
<!-- components/forms/ProjectInquiryForm.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <!-- Basic Info Section -->
    <div class="form-section">
      <div class="form-description">
        <h1 class="form-title">PROJECT INQUIRY</h1>
        <p>
          Hey! We'd love to learn about what you're working towards to ensure we're a good fit. 
          As a next step, please review the details below and submit our "Ship It" form.
        </p>
      </div>

      <div class="form-grid">
        <FormInput
          v-model="form.firstName"
          placeholder="FIRST NAME"
          :error="errors.firstName"
          required
        />
        <FormInput
          v-model="form.lastName"
          placeholder="LAST NAME"
          :error="errors.lastName"
          required
        />
        <FormInput
          v-model="form.company"
          placeholder="COMPANY"
          :error="errors.company"
          required
        />
        <FormInput
          v-model="form.email"
          type="email"
          placeholder="EMAIL"
          :error="errors.email"
          required
        />
      </div>

      <TagButtonGroup
        v-model="form.tags"
        :options="tagOptions"
        label="Project Type"
      />

      <div class="form-group full-width">
        <div class="section-title">PROJECT DESCRIPTION</div>
        <FormTextarea
          v-model="form.description"
          placeholder="Tell us about your project..."
          :error="errors.description"
          required
        />
      </div>
    </div>

    <!-- Additional Info Section -->
    <div class="form-section">
      <div class="section-title">ADDITIONAL INFORMATION</div>

      <div class="form-grid">
        <div class="form-group">
          <div class="section-title">BUDGET</div>
          <FormSelect
            v-model="form.budget"
            :options="budgetOptions"
            placeholder="SELECT"
          />
        </div>
        <FormInput
          v-model="form.timeline"
          placeholder="TIMELINE"
          label="TIMELINE"
        />
      </div>

      <div class="form-grid">
        <FormInput
          v-model="form.additional1"
          placeholder="TYPE HERE"
          label="ADDITIONAL INFO 1"
        />
        <FormInput
          v-model="form.additional2"
          placeholder="TYPE HERE"
          label="ADDITIONAL INFO 2"
        />
      </div>

      <TagButtonGroup
        v-model="form.services"
        :options="serviceOptions"
        label="Services Needed"
      />
    </div>

    <!-- More Info Section -->
    <div class="form-section">
      <div class="section-title">MORE INFORMATION</div>

      <FormSelect
        v-model="form.moreInfo"
        :options="moreInfoOptions"
        label="MORE THAN ONE"
        placeholder="SELECT"
      />

      <div class="form-grid">
        <FormInput
          v-model="form.moreField1"
          placeholder="TYPE HERE"
          label="MORE THAN ONE"
        />
        <FormInput
          v-model="form.moreField2"
          placeholder="TYPE HERE"
          label="MORE THAN ONE"
        />
      </div>
    </div>

    <!-- FAQs Section -->
    <FaqSection :faqs="faqs" />

    <!-- Submit Section -->
    <div class="submit-section">
      <button type="submit" class="submit-btn" :disabled="isSubmitting">
        {{ isSubmitting ? 'SUBMITTING...' : 'LFG' }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import FormInput from './FormInput.vue'
import FormSelect from './FormSelect.vue'
import FormTextarea from './FormTextarea.vue'
import TagButtonGroup from './TagButtonGroup.vue'
import FaqSection from '../ui/FaqSection.vue'
import { useFormValidation } from '../../composables/useFormValidation'

const emit = defineEmits(['submit'])

const isSubmitting = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  description: '',
  budget: '',
  timeline: '',
  additional1: '',
  additional2: '',
  moreInfo: '',
  moreField1: '',
  moreField2: '',
  tags: [],
  services: []
})

const { errors, validateForm, resetErrors } = useFormValidation()

const tagOptions = ['brand', 'website', 'art-direction', 'campaign', 'other']
const serviceOptions = ['brand', 'website', 'art-direction', 'campaign', 'other']
const budgetOptions = [
  { value: 'less-than-50k', label: 'Less than $50k' },
  { value: '50k-100k', label: '$50k - $100k' },
  { value: '100k-250k', label: '$100k - $250k' },
  { value: '250k-plus', label: '$250k+' }
]
const moreInfoOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]

const faqs = [
  {
    question: "JOB INQUIRIES",
    answer: "Send us your portfolio, tell us about yourself, and share what you're interested in. Please visit our Careers page to stay updated on all our new posts."
  },
  {
    question: "WHAT IS YOUR TYPICAL PROJECT TIMELINE?",
    answer: "Project timelines vary based on scope and requirements. We'll discuss and agree on a timeline that works for both parties during the briefing process."
  },
  {
    question: "CAN I SCHEDULE A CALL?",
    answer: "Absolutely! After you submit your inquiry, we'll reach out to schedule a call to discuss your project in more detail."
  }
]

function handleSubmit() {
  resetErrors()
  
  if (!validateForm(form)) {
    scrollToFirstError()
    return
  }
  
  isSubmitting.value = true
  
  // Simulate API call
  setTimeout(() => {
    emit('submit', { ...form })
    alert('Thank you! Your inquiry has been submitted.')
    resetForm()
    isSubmitting.value = false
  }, 2000)
}

function resetForm() {
  Object.assign(form, {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    description: '',
    budget: '',
    timeline: '',
    additional1: '',
    additional2: '',
    moreInfo: '',
    moreField1: '',
    moreField2: '',
    tags: [],
    services: []
  })
}

function scrollToFirstError() {
  const firstError = Object.keys(errors.value)[0]
  const errorElement = document.querySelector(`[data-field="${firstError}"]`) ||
    document.querySelector('.error')
  if (errorElement) {
    errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
</script>
