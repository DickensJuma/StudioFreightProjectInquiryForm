<!-- components/forms/ProjectInquiryForm.vue -->
<template>
  <form class="form-card" @submit.prevent="handleSubmit">
    <!-- Success Section -->
    <div v-if="isSubmitted" class="success-section" ref="successSection">
      <div class="plus-line-row">
        <span class="plus-icon">+</span>
        <div class="line"></div>
        <span class="plus-icon">+</span>
      </div>
      <div class="section-title">Thanks for reaching out</div>
      <p>While you anxiously await our reply, you can play <span>this game</span> we built for Lunchbox, create ASCII art with  <span> Aniso</span>, or get in the zone with our latest  <span>playlist</span>. We'll be in touch soon.</p>
    </div>

    <!-- Form Content -->
    <div v-else>

    <!-- Basic Info Section -->
    <div class="form-section">
      <div class="form-description ">
        <div class="plus-line-row">
          <span class="plus-icon">+</span>
          <div class="line"></div>
          <span class="plus-icon">+</span>
        </div>
        <h1 class="section-title">PROJECT INQUIRY</h1>
        <p>Hey! We'd love to learn about what you're working towards to ensure we're a good fit. As a next step, please review the details below and submit our LFG form</p>
        <p><span> Timing.</span>
          We're an independent creative studio dedicated to top-caliber outcomes, so we work with full devotion for a few select clients at a time such that inquiries with rushed timelines are generally not possible.
        </p>
        <p> <span> Scope.</span>
          We mostly focus on brand strategy, visual identity, website design and development, and campaigns. We're open to other requests (!) but generally want to work on the biggest opportunities — we don't often take on projects needing quick fixes or incremental improvements
        </p>
        <p> <span> Budget.</span>
          Budgets vary based on deliverables, timelines, and stakes. Our smallest engagements typically begin at $80k and more comprehensive offerings can extend up to $250k+. If your expectations are different, please don't be discouraged from continuing the conversation and sharing any budget limitations.
          As a next step, please review the details below and submit our "Ship It" form.
        </p>
      </div>

      <div class="form-grid">
        <FormInput
          v-model="form.firstName"
          label="FIRST NAME *"
          placeholder="FIRST NAME"
          :error="errors.firstName"
          required
        />
        <FormInput
          v-model="form.lastName"
          label="LAST NAME *"
          placeholder="LAST NAME"
          :error="errors.lastName"
          required
        />
        <FormInput
          v-model="form.company"
          label="COMPANY"
          placeholder="COMPANY"
          :error="errors.company"
          required
        />
        <FormInput
          v-model="form.email"
          label="Email"
          type="EMAIL"
          placeholder="EMAIL *"
          :error="errors.email"
          required
        />
      </div>

      <div class="section-title">SELECT ALL PROJECT TYPES THAT APPLY*</div>

      <TagButtonGroup v-model="form.tags" :options="tagOptions" label="Project Type" />

      <div class="form-group full-width">
        <div class="section-title">PROJECT DESCRIPTION</div>
        <FormTextarea 
         v-model="form.description" placeholder="Type here..." :error="errors.description"
          required />
      </div>
    </div>

    <!-- Additional Info Section -->
    <div class="form-section">

      <div class="form-grid">
        <div class="form-group">
          <FormSelect v-model="form.budget" label="BUDGET":options="budgetOptions" placeholder="SELECT" />
        </div>
        <FormInput v-model="form.timeline" placeholder="TIMELINE" label="TIMELINE" />
      </div>

      <div class="form-grid">
        <FormInput v-model="form.additional1" placeholder="TYPE HERE" label="ADDITIONAL INFO 1" />
        <FormInput v-model="form.additional2" placeholder="TYPE HERE" label="ADDITIONAL INFO 2" />
      </div>

      <TagButtonGroup v-model="form.services" :options="serviceOptions" label="Services Needed" />
    </div>
  
 

    <!-- More Info Section -->
    <div class="form-section">
      <div class="section-title">MORE INFORMATION</div>
      <div class="form-grid more-info-grid">
        <FormSelect
          v-model="form.moreInfo"
          label="More Than One"
          placeholder="SELECT"
          :options="moreInfoOptions"
        />
        <FormInput
          v-model="form.moreField1"
          label="More Than One"
          placeholder="TYPE HERE"
        />
        <FormInput
          v-model="form.moreField2"
          label="More Than One"
          placeholder="TYPE HERE"
        />
        <FormInput
          v-model="form.moreField3"
          label="More Than One"
          placeholder="TYPE HERE"
        />
      </div>
    </div>

    <!-- Submit Section -->
    <div class="submit-section">
      <button type="submit" class="submit-btn" :disabled="isSubmitting">
        {{ isSubmitting ? 'SUBMITTING...' : 'LFG' }} 
      </button>
    </div>

    <!-- FAQs Section -->
    <FaqSection :faqs="faqs" />


    </div>


  
  </form>
</template>

<script setup>
import { reactive, ref, onMounted, watch } from 'vue'
import { gsap } from 'gsap'
import FormInput from './FormInput.vue'
import FormSelect from './FormSelect.vue'
import FormTextarea from './FormTextarea.vue'
import TagButtonGroup from './TagButtonGroup.vue'
import FaqSection from '../ui/FaqSection.vue'
import { useFormValidation } from '../../composables/useFormValidation'

const emit = defineEmits(['submit'])

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const successSection = ref(null)

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
  moreField3: '',
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
 

  // Simulate API call
  setTimeout(() => {
    emit('submit', { ...form })
    isSubmitted.value = true
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
    moreField3: '',
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

// GSAP animation for form load
onMounted(() => {
  gsap.from('.form-card', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out'
  });
  gsap.from('.form-card input, .form-card textarea, .form-card .submit-btn', {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    delay: 0.5,
    duration: 0.6
  });
});

watch(isSubmitted, (newValue) => {
  if (newValue && successSection.value) {
    gsap.from(successSection.value, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out'
    })
  }
})
</script>


<style lang="scss" scoped>
@use '../../assets/styles/_variables' as *;

.project-inquiry {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;

  h1 {
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #ffffff;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  >p {
    font-size: 1rem;
    line-height: 1.6;
    color: #cccccc;
    margin-bottom: 3rem;
    max-width: 600px;
  }

  .info-sections {
    display: grid;
    gap: 2.5rem;

    .info-item {
      border-left: 2px solid #1a1a1a;
      padding-left: 1.5rem;

      h3 {
        font-size: 1rem;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 0.75rem;

        &::after {
          content: '';
          display: inline-block;
          width: 0.25rem;
          height: 0.25rem;
          background-color: #00ff88;
          border-radius: 50%;
          margin-left: 0.5rem;
          vertical-align: middle;
        }
      }

      p {
        font-size: 0.9rem;
        line-height: 1.6;
        color: #999999;
        margin: 0;
      }

      // Hover effects
      &:hover {
        border-left-color: #00ff88;
        transition: border-left-color 0.3s ease;

        h3 {
          color: #00ff88;
          transition: color 0.3s ease;
        }
      }
    }
  }
}

.plus-line-row {
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-bottom: 5px;
}

.plus-icon {
  font-size: 24px;
  color:  gray;
  margin: 0 8px;
}

.line {
  flex: 1;
  height: 2px;
  background: #333;
  border-radius: 1px;
  min-width: 40px;
}

.form-title {
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
  color: #888888;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.form-description {
  font-size: 16px;
  line-height: 1.2;
  color: #ffffff;
  // margin-bottom: 10px;
  font-weight: 400;
 
}

.form-description p {
  font-size: 0.8rem;
  color: #cccccc;
  line-height: 1.6;

  span {
    font-weight: bold;
    color: #ffff;
    font-size: 0.8rem;
    margin-right: 0.5em;
    letter-spacing: 0.02em;
  }
}

/* Studio Background */
.studio-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><text x="50" y="150" fill="%23111" font-size="120" font-weight="bold" font-family="Arial">STUDIO</text></svg>') no-repeat;
  background-size: cover;
  opacity: 0.1;
  z-index: 1;
}



.logo {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}

.contact-btn {
  background: none;
  border: 1px solid #fff;
  color: #fff;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 8px;
}

.contact-btn:hover {
  border-color: #666;
  background: rgba(255, 255, 255, 0.1);
}


.form-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #666;
  margin-bottom: 10px;
  margin-top: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  position: relative;
}

.form-group label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #ffff;
  margin-bottom: 6px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  background: #000;
  border: 1px solid #ffff;
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
  box-shadow: 0 0 0 2px rgba(0,255,136,0.15);
}



.form-select {
  appearance: none;
  cursor: pointer;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23666"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
}

.error {
  border-color: #ff4444 !important;
}

.error-message {
  color: #ff4444;
  font-size: 12px;
  margin-top: 5px;
}

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 15px;
}



.submit-section {
  margin-top: 5px;
}

.submit-btn {
  width: 100%;
  background: none;
  border: 1px solid #00ff00;
  color: #00ff00;
  padding: 15px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 8px;
}

.submit-btn:hover {
  background: rgba(0, 255, 0, 0.1);
}

.submit-btn:disabled {
  background: #333;
  color: #666;
  cursor: not-allowed;
}


/* Responsive */
@media (max-width: 900px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}


@media (max-width: 768px) {


  .form-grid {
    grid-template-columns: 1fr;
  }


}

.form-divider {
  border: none;
  border-top: 1px solid #222;
  margin: 32px 0;
}

.more-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.more-info-grid > * {
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
}

@media (max-width: 900px) {
  .more-info-grid {
    grid-template-columns: 1fr;
  }
}

.success-section {
  text-align: left;
  padding: 20px 10px;
  max-width: 600px;
  margin: 0 auto;
}

.section-title {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #666;
  margin-bottom: 10px;
  margin-top: 20px;
}

p {
  font-size: 14px;
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 20px;

  span {
    color: #00ff00;
  }
}

.plus-line-row {
  margin-bottom: 20px;
}
</style>