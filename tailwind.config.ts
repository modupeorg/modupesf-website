import type { Config } from "tailwindcss";

export default {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			caros: [
  				'var(--font-caros)'
  			]
  		},
  		colors: {
  			green: '#042b22',
  			lime: '#c7eb5f',
  			white: '#fffeff'
  		},
  		container: {
  			padding: '1rem',
  			center: true
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [],
} satisfies Config;
