module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}', 'src/**/*.vue'],
			parserOptions: {
				sourceType: 'script',
			},
			rules: { 'vue/multi-word-component-names': 'off' },
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		// 解决ESLint和Prettier的switch/case缩进冲突
		indent: ['error', 2, { SwitchCase: 1 }],
		'no-unused-vars': 'off',
		// vite打包时自动去除console和debugger,所以这里直接关掉检查
		'no-console': 'off',
		'no-debugger': 'off',
		// 允许catch空着
		'no-empty': ['error', { allowEmptyCatch: true }],
	},
};
