/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				paris: ['"Parisienne"', ...defaultTheme.fontFamily.sans],
				lora: ['"Lora"', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'primary': {
					'50': '#f1faeb',
					'100': '#e1f2d5',
					'200': '#c4e7af',
					'300': '#9fd680',
					'400': '#84c761',
					'500': '#5ea939',
					'600': '#46862a',
					'700': '#376724',
					'800': '#305222',
					'900': '#2a4720',
					'950': '#13260d',
				},
				'second': {
					'50': '#f2f9fd',
					'100': '#e5f2f9',
					'200': '#c5e5f2',
					'300': '#74c2e1',
					'400': '#57b6d9',
					'500': '#329ec5',
					'600': '#227fa7',
					'700': '#1d6687',
					'800': '#1b5671',
					'900': '#1c495e',
					'950': '#132f3e',
				},
				'secondd': {
					'50': '#faf6ee',
					'100': '#f6eded',
					'200': '#ecdcdc',
					'300': '#dec3c3',
					'400': '#cba1a2',
					'500': '#b57e80',
					'600': '#9d6167',
					'700': '#834d53',
					'800': '#6e434a',
					'900': '#603b42',
					'950': '#331e21',
				},
				'call': {
					'50': '#faf5ec',
					'100': '#f2e8cf',
					'200': '#e7d2a1',
					'300': '#d9b36b',
					'400': '#cd9742',
					'500': '#be8234',
					'600': '#a3652b',
					'700': '#834a25',
					'800': '#6e3e25',
					'900': '#5e3525',
					'950': '#361b12',
				},
				'txts': {
					'50': '#f7f7f7',
					'100': '#e6e6e6',
					'200': '#dfdfdf',
					'300': '#c8c8c8',
					'400': '#adadad',
					'500': '#999999',
					'600': '#888888',
					'700': '#7b7b7b',
					'800': '#676767',
					'900': '#545454',
					'950': '#363636',
				},
				'brand1': {
					'50': '#f9f8f1',
					'100': '#eeead7',
					'200': '#dcd4ab',
					'300': '#c9bb7e',
					'400': '#bda862',
					'500': '#b2924e',
					'600': '#9c7743',
					'700': '#835d3a',
					'800': '#6c4c34',
					'900': '#5a3f2d',
					'950': '#322116',
				},
				'brand2': {
					'50': '#fef4f2',
					'100': '#fde8e3',
					'200': '#fcd5cc',
					'300': '#f8b7a9',
					'400': '#f28d77',
					'500': '#e96e53',
					'600': '#d54b2d',
					'700': '#b33c22',
					'800': '#943520',
					'900': '#7b3121',
					'950': '#43160c',
				}
			}
		}
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				'h1': { fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Lora' },
				'h2': { fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'Lora' },
				'h3': { fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Lora' },
				'h4': { fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Lora' },
				'h5': { fontSize: '1.25rem', fontWeight: 'bold', fontFamily: 'Lora' },
				'body': { fontSize: theme('fontSize.lg'), color: '#43160c' }
			})
		})
	],
}
