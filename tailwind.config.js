/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Automotive/premium brand colors
        primary: '#1a1a1a',      // Deep black
        secondary: '#dc2626',    // Dynamic red (accent)
        accent: '#fbbf24',       // Gold accent
        background: '#ffffff',
        surface: '#f9fafb',
        border: '#e5e7eb',
        text: {
          primary: '#1f2937',
          secondary: '#6b7280',
          tertiary: '#9ca3af',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      spacing: {
        container: '1rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      borderRadius: {
        xs: '0.25rem',
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
