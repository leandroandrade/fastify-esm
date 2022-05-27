module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'prettier', 'plugin:security/recommended'],
    plugins: ['prettier', 'security'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
        'no-unused-expressions': [2, { allowShortCircuit: true }],
        'no-return-await': 'off',
        'class-methods-use-this': 'off',
        'no-shadow': 'off',
        'arrow-body-style': 'off',
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
    },
};
