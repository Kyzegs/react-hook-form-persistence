module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
			rules: {
				'@typescript-eslint/ban-types': ['error', {
					types: {
						null: false,
					},
					extendDefaults: true,
				}],
				'@typescript-eslint/object-curly-spacing': ['error', 'always'],
				'@typescript-eslint/naming-convention': ['error', {
					selector: 'typeParameter',
					format: ['PascalCase'],
					prefix: ['T'],
				}],
				'@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'object-curly-spacing': ['error', 'always'],
	},
};