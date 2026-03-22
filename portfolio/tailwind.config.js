/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        slate: {
          850: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body:    ['"Outfit"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease-out forwards',
        'fade-in':   'fadeIn 0.5s ease-out forwards',
        'float':     'float 4s ease-in-out infinite',
        'glow':      'glow 2s ease-in-out infinite alternate',
        'slide-in':  'slideIn 0.4s ease-out forwards',
        'blink':     'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp:  { '0%': { opacity:'0', transform:'translateY(24px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
        fadeIn:  { '0%': { opacity:'0' }, '100%': { opacity:'1' } },
        float:   { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-10px)' } },
        glow:    { '0%': { boxShadow:'0 0 10px rgba(34,211,238,0.3)' }, '100%': { boxShadow:'0 0 30px rgba(34,211,238,0.7)' } },
        slideIn: { '0%': { opacity:'0', transform:'translateX(-20px)' }, '100%': { opacity:'1', transform:'translateX(0)' } },
        blink:   { '0%,100%': { opacity:'1' }, '50%': { opacity:'0' } },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)',
        'cyan-glow':    'radial-gradient(ellipse at center, rgba(34,211,238,0.15) 0%, transparent 70%)',
        'hero-glow':    'radial-gradient(ellipse at 30% 50%, rgba(34,211,238,0.12) 0%, transparent 60%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
