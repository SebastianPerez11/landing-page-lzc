/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		gridTemplateColumns: {
			'auto-services': 'repeat(auto-fit, minmax(800px, 1fr))',
			'auto-data': 'repeat(auto-fit, minmax(300px, 1fr))',
			'auto-12': 'repeat(12, minmax(0, 1fr))',
		
		},
	},
	plugins: [],
}
