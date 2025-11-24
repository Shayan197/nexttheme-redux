// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    js.configs.recommended,
    ...compat.extends('next/core-web-vitals'),
    prettierConfig,
    {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        ignores: ['node_modules/**', '.next/**', 'dist/**', 'eslint.config.mjs'],
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
        plugins: {
            import: importPlugin,
            '@typescript-eslint': tsPlugin,
            prettier: prettierPlugin,
        },
        settings: {
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
        rules: {
            // Formatting
            'prettier/prettier': ['error'],
            indent: ['error', 4, { SwitchCase: 1 }],
            'func-style': ['error', 'expression', { allowArrowFunctions: true }],

            // Naming Conventions
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
                    format: ['camelCase', 'UPPER_CASE'],
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

            // React
            'react/jsx-uses-react': 'off', // Not needed in React 17+
            'react/jsx-uses-vars': 'error',
            'react/jsx-pascal-case': 'error',
            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },
            ],

            // Console and unused
            'no-console': 'warn',
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'no-var': 'error',

            // Import Order
            'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
            'import/no-unresolved': 'error',
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
];

export default eslintConfig;
