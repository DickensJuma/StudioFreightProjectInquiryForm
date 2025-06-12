import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useAnimations() {
  const createEntryAnimation = (selector, options = {}) => {
    const defaults = {
      duration: 1,
      ease: "power3.out",
      y: 50,
      opacity: 0
    }
    
    return gsap.fromTo(selector, 
      { opacity: 0, y: defaults.y },
      { ...defaults, ...options }
    )
  }
  
  const createStaggerAnimation = (selector, options = {}) => {
    return gsap.fromTo(selector,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        ...options
      }
    )
  }
  
  return {
    createEntryAnimation,
    createStaggerAnimation
  }
}