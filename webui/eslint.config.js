import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tslint from "typescript-eslint";

const extraFileExtensions = [".vue"];

export default tslint.config(
	eslint.configs.recommended,
	...tslint.configs.recommended,
	// @ts-expect-error
	...pluginVue.configs["flat/recommended"],
	{
		files: ["**/*.ts"],
		languageOptions: {
			parserOptions: {
				parser: tslint.parser,
				extraFileExtensions,
			},
		},
	},
	{
		files: ["**/*.vue"],
		languageOptions: {
			parserOptions: {
				parser: tslint.parser,
				extraFileExtensions,
			},
		},
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			"vue/no-v-html": "off",
			"vue/require-explicit-emits": "off",
			"no-unused-vars": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/ban-ts-comment": "off",
			"no-console": ["error", { allow: ["warn", "error", "trace"] }],
		},
	},
	{ ignores: ["node_modules/", "dist/"] },
	eslintConfigPrettier
);
