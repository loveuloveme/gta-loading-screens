require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-airbnb-with-typescript',
    ],
    env: {
        node: true,
    },
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-cond-assign': ['error', 'always'],
        'no-console': 'off',
        'linebreak-style': 0,
        'vue/multi-word-component-names': 'off',
        indent: ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4],
    },
};
