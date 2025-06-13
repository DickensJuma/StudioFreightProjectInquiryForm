<!-- Main Component: StudioContactForm.vue -->
<template>
  <div class="main-container">
    <!-- Studio Background -->
    <div class="studio-bg"></div>

    <!-- Header Component -->
    <AppHeader @open-sidebar="openSidebar" />

    <!-- Main Content -->
    <main class="main-content">
      <ProjectInquiryInfo />
    </main>

    <!-- Sidebar Component -->
    <AppSidebar 
      :is-open="sidebarOpen" 
      @close="closeSidebar"
      ref="sidebar"
    />
  </div>
</template>

<script setup>
import { ref, nextTick,onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import AppHeader from '../components/layout/AppHeader.vue'
import AppSidebar from '../components/layout/AppSidebar.vue'
import ProjectInquiryInfo from '../components/ui/ProjectInquiryInfo.vue'

// State
const sidebarOpen = ref(false)
const sidebar = ref(null)

// Sidebar controls with GSAP animations
function openSidebar() {
  sidebarOpen.value = true
  document.body.style.overflow = 'hidden'
  nextTick(() => {
    gsap.fromTo(
      sidebar.value.$el,
      { x: '100%' },
      { x: '0%', duration: 0.6, ease: 'power2.out' }
    )
  })
}

function closeSidebar() {
  gsap.to(sidebar.value.$el, {
    x: '100%',
    duration: 0.6,
    ease: 'power2.in',
    onComplete: () => {
      sidebarOpen.value = false
      document.body.style.overflow = 'auto'
    }
  })
}

// Escape key handler
function handleKeydown(e) {
  if (e.key === 'Escape' && sidebarOpen.value) {
    closeSidebar()
  }
}

// Lifecycle
onMounted(() => {
  // GSAP intro animations
  gsap.set('.project-inquiry h1', { opacity: 0, y: 50 })
  gsap.set('.project-inquiry p', { opacity: 0, y: 30 })
  gsap.set('.contact-btn', { opacity: 0, scale: 0.8 })
  
  const tl = gsap.timeline({ delay: 0.5 })
  tl.to('.contact-btn', { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' })
    .to('.project-inquiry h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
    .to('.project-inquiry p', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')

  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>


<style lang="scss" scoped>
@use '../assets/styles/_variables' as *;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background: #000;
    color: #fff;
    overflow-x: hidden;
}


.main-container {
  min-height: 100vh;
  background: $background-color;
  font-family: $font-family;
}

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


.main-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
}

.main-content {
    background-color: #0a0a0a;
    color: #ffffff;
    min-height: 100vh;
    padding: 2rem;

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
}

        .form-container {
            position: relative;
            z-index: 1;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 40px 60px;
        }

        .form-header {
            margin-bottom: 50px;
        }

        .form-title {
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 3px;
            color: #888888;
            margin-bottom: 40px;
            text-transform: uppercase;
        }

        .form-description {
            font-size: 16px;
            line-height: 1.7;
            color: #ffffff;
            margin-bottom: 40px;
            font-weight: 400;
        }

        .info-section {
            margin-bottom: 40px;
        }

        .info-item {
            margin-bottom: 30px;
        }

        .info-label {
            font-size: 16px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 8px;
            display: block;
        }

        .info-text {
            font-size: 16px;
            line-height: 1.7;
            color: #ffffff;
            font-weight: 400;
        }



// Responsive design
@media (max-width: 768px) {
    .main-content {
        padding: 1rem;

        .project-inquiry {
            padding: 2rem 0;

            h1 {
                font-size: 0.75rem;
                margin-bottom: 1.5rem;
            }

            >p {
                font-size: 0.9rem;
                margin-bottom: 2rem;
            }

            .info-sections {
                gap: 2rem;

                .info-item {
                    padding-left: 1rem;

                    h3 {
                        font-size: 0.9rem;
                    }

                    p {
                        font-size: 0.85rem;
                        }
                }
            }
        }
    }
}

// Additional utility classes for green accent
.accent-green {
    color: #00ff88;
}

.border-accent-green {
    border-color: #00ff88;
}

// If you want to add the grid pattern background like in the design
.main-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
    z-index: 0;
}

.project-inquiry {
    position: relative;
    z-index: 1;
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

/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
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

/* Main Content */
.main-content {
    position: relative;
    z-index: 2;
    padding-top: 80px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}


/* Sidebar */
.sidebar {
    position: fixed;
    top: 0;
    right: -100%;
    width: 50%;
    max-width: 600px;
    min-width: 500px;
    height: 100vh;
    background: #111;
    z-index: 1000;
    transition: right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    overflow-y: auto;
    border-left: 1px solid #333;
}

.sidebar.active {
    right: 0;
}

.sidebar-header {
    padding: 10px 20px;
    // border-bottom: 1px solid #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: #111;
    z-index: 10;
}

.sidebar-title {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
}

.close-btn {
    background: none;
    border: 1px solid #00ff00;
    color: #00ff00;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 8px;
}

.close-btn:hover {
    background: rgba(0, 255, 0, 0.1);
}


.form-container {
    padding: 20px;
}

.form-section {
    margin-bottom: 40px;
}

.section-title {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #666;
    margin-bottom: 20px;
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

.form-group.full-width {
    grid-column: 1 / -1;
}

.form-input,
.form-select,
.form-textarea {
    width: 100%;
    background: #000;
    border: 1px solid #fff;
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
    border-color: #00ff88;;
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
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

.tag-btn {
    background: none;
    border: 1px solid #fff;
    color: #999;
    padding: 8px 16px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 15px;
    font-weight: bold;
}

.tag-btn.active,
.tag-btn:hover {
    border-color: #666;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}

.file-upload {
    border: 2px dashed #333;
    padding: 30px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 20px;
}

.file-upload:hover {
    border-color: #666;
    background: rgba(255, 255, 255, 0.05);
}

.file-upload-text {
    color: #666;
    font-size: 14px;
}

.submit-section {
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid #333;
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
    transition: all 0.3s ease;
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

/* Scrollbar */
.sidebar::-webkit-scrollbar {
    width: 6px;
}

.sidebar::-webkit-scrollbar-track {
    background: #111;
}

.sidebar::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
    background: #555;
}

/* Responsive */
@media (max-width: 768px) {
    .sidebar {
        width: 100%;
        min-width: auto;
        right: -100%;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .header {
        padding: 15px 20px;
    }

    .project-inquiry h1 {
        font-size: 36px;
    }
}



/* Custom dropdown styles */
.dropdown-container {
    position: relative;
}

.dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #000;
    border: 1px solid #fff;
    border-top: none;
    max-height: 200px;
    overflow-y: auto;
    z-index: 100;
    display: none;
}

.dropdown-list.active {
    display: block;
}

.dropdown-item {
    padding: 12px;
    cursor: pointer;
    transition: background 0.2s ease;
    font-size: 14px;
}

.dropdown-item:hover {
    background: #222;
}
</style>