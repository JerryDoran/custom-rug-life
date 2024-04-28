/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translate(-100%)' },
          '100%': { transform: 'translate(0px)' },
        },
        slideinRight: {
          '0%': { transform: 'translate(100%)' },
          '100%': { transform: 'translate(0px)' },
        },
        slideinLeft: {
          '0%': { transform: 'translate(-100%)' },
          '100%': { transform: 'translate(0px)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        slidein: 'slide 0.8s ease-out',
        slideOut: 'slide 0.2s ease-in reverse',
        slideinRight: 'slideinRight 0.8s ease-out',
        slideinLeft: 'slideinLeft 0.8s ease-out',
        slideDown: 'slideDown 0.2s ease-out',
        slideUp: 'slideUp 0.2s ease-out',
        fadeIn: 'fadeIn 2s .5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
