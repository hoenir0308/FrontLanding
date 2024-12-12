import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks"


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        plugins: {
            'react-hooks': reactHooks,
        },
        rules: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            'linebreak-style': 0,
            indent: [2, 4],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            'react/require-default-props': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'max-len': [
                'error',
                {
                    ignoreComments: true,
                    ignoreUrls: true,
                    ignorePattern: '^(import\\s.+\\sfrom\\s.+|\\} from)',
                    code: 120,
                },
            ],
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
            'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
            'no-param-reassign': 'off',
            'no-undef': 'off',
            'react/react-in-jsx-scope': 'off',
            "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }]
        },
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},

    {
        languageOptions: {
            globals: globals.browser
        },
    },

    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
];