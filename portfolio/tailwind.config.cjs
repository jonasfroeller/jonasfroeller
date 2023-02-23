/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
	daisyui: {
		styled: true,
		themes: ['night', 'cmyk'], // dark, light
		darkTheme: 'night',
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: ''
	}
};
