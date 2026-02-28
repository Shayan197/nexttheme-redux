// eslint.config.js
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierPlugin from 'eslint-plugin-prettier'; // Adds "prettier/prettier" rule
import prettierConfig from 'eslint-config-prettier/flat'; // Disables ESLint rules conflicting with Prettier
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
    // 🔹 Next.js Core Web Vitals + TypeScript rules
    ...nextVitals,
    ...nextTs,
    prettierConfig, // Spread Prettier config to disable conflicting rules

    {
        plugins: {
            import: importPlugin,
            react: reactPlugin,
            '@typescript-eslint': tsPlugin,
            prettier: prettierPlugin, // Enables "prettier/prettier" rule
        },

        settings: {
            // 🟦 Auto import resolver + aliases
            'import/resolver': {
                typescript: {
                    project: './tsconfig.json',
                },
                alias: {
                    map: [['@', './src']],
                    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
                },
            },
        },

        // 🟩 Target files
        files: ['src/**/*.{ts,tsx,js,jsx}'],

        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json',
                tsconfigRootDir: process.cwd(),
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        /* ------------------------------------------
         *  ⭐ PRETTIER + FORMAT RULES
         * ------------------------------------------ */
        rules: {
            'prettier/prettier': 'error',
            indent: ['error', 4, { SwitchCase: 1 }],
            'func-style': ['error', 'expression', { allowArrowFunctions: true }],

            /* ------------------------------------------
             *  ⭐ TYPE-SCRIPT NAMING RULES
             * ------------------------------------------ */
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'variable',
                    format: ['camelCase'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: 'variable',
                    modifiers: ['const'],
                    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                    leadingUnderscore: 'allow',
                },
                {
                    selector: 'variable',
                    types: ['function'],
                    modifiers: ['const'],
                    format: ['camelCase', 'PascalCase'],
                },
                { selector: 'typeLike', format: ['PascalCase'] },
                {
                    selector: 'variable',
                    types: ['boolean'],
                    format: ['PascalCase'],
                    prefix: ['is', 'has', 'can'],
                },
            ],

            /* ------------------------------------------
             * ⭐ REACT RULES (optimized for Next.js)
             * ------------------------------------------ */
            'react/jsx-uses-vars': 'error',
            'react/jsx-pascal-case': 'error',
            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },
            ],

            /* ------------------------------------------
             * ⭐ CLEAN CODE RULES
             * ------------------------------------------ */
            'no-console': 'warn',
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'no-var': 'error',

            /* ------------------------------------------
             * ⭐ IMPORT RULES
             * ------------------------------------------ */
            'import/no-unresolved': 'error',
            'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
            'import/order': [
                'error',
                {
                    groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
        },
    },
    // 🟥 Ignore directories
    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'node_modules/**']),
]);
