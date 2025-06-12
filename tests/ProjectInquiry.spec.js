import { mount } from '@vue/test-utils'
import ProjectInquiry from '@/components/ProjectInquiry.vue'

describe('ProjectInquiry', () => {
  test('validates required fields', async () => {
    const wrapper = mount(ProjectInquiry)
    await wrapper.find('form').trigger('submit')
    expect(wrapper.find('.error-message').exists()).toBe(true)
  })
  
  test('opens sidebar on contact button click', async () => {
    const wrapper = mount(ProjectInquiry)
    await wrapper.find('.contact-btn').trigger('click')
    expect(wrapper.find('.sidebar').classes()).toContain('active')
  })
})