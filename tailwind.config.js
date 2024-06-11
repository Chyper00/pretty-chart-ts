/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}', // Inclui todos os arquivos na pasta src
		'./lib/**/*.{js,ts,jsx,tsx}', // Inclui todos os arquivos na pasta lib
		'./public/index.html' // Inclui o arquivo HTML principal (caso você tenha Tailwind classes no HTML)
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
