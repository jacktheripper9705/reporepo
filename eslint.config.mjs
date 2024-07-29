import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
	{ files: ['**/*.{js,mjs,cjs,jsx}'] },
	{
		env: {
			node: true,
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
			},
		},
	},
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
];
