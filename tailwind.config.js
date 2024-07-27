import { colors } from './src/constants/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: colors,
			fontFamily: {
				pretendardLight: 'light',
				pretendardSemibold: 'semiBold',
				pretendardBold: 'bold',
			},
		},
	},
	plugins: [],
};
