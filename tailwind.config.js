/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'poppins-medium': ['PoppinsMedium', 'sans-serif'],
				'poppins-bold': ['PoppinsBold', 'sans-serif'],
				'poppins-semibold': ['PoppinsSemiBold', 'sans-serif'],
				'poppins-it': ['PoppinsItalic', 'sans-serif'],
				'poppins-semi-it': ['PoppinsSemiBoldItalic', 'sans-serif'],
				'poppins-medium-it': ['PoppinsMediumItalic', 'sans-serif'],
			},
		},
	},
	presets: [require('nativewind/preset')],
	plugins: [],
};
