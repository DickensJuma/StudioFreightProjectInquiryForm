# Studio Freight Project Inquiry Form

A modern, responsive web application for handling project inquiries with a sleek design and smooth animations.

## Features

- 🎨 Modern, minimalist design with dark theme
- ✨ Smooth GSAP animations for enhanced user experience
- 📱 Fully responsive layout
- 🎯 Form validation with visual feedback
- 🎭 Custom form components with consistent styling
- 🎪 Interactive FAQ section
- 🎨 Custom Helvetica font integration

## Tech Stack

- Vue.js 3
- Vite
- SCSS
- GSAP (GreenSock Animation Platform)
- Custom Helvetica Font Family

## Project Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/
│   └── styles/
│       ├── helvetica-255/    # Custom fonts
│       ├── _variables.scss   # Design tokens
│       ├── _fonts.scss      # Font declarations
│       ├── _form.scss       # Form styles
│       └── main.scss        # Main stylesheet
├── components/
│   ├── forms/
│   │   ├── FormInput.vue
│   │   ├── FormSelect.vue
│   │   ├── FormTextarea.vue
│   │   └── TagButtonGroup.vue
│   └── ui/
│       └── FaqSection.vue
└── App.vue
```

## Form Components

### FormInput
- Text input with GSAP animations
- Custom styling with focus/blur states
- Error state handling

### FormSelect
- Custom styled dropdown
- Placeholder support
- Consistent styling with other form elements

### FormTextarea
- Resizable text area
- GSAP animations
- Error state handling

### TagButtonGroup
- Interactive tag selection
- Multiple selection support
- Required field validation

## Styling

The project uses a custom SCSS architecture with:
- Design tokens for consistent theming
- Custom Helvetica font family
- GSAP animations for smooth transitions
- Responsive design patterns

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
