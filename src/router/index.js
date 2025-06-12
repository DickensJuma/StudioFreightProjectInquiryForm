import { createRouter, createWebHistory } from 'vue-router'
import ContactForm from '../components/ContactForm.vue'
import SuccessView from '../components/SuccessMessage.vue'

const routes = [
  { path: '/', name: 'Form', component: ContactForm },
  { path: '/success', name: 'Success', component: SuccessView }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
