module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: 'airbnb-base',
    overrides: [
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
      'class-methods-use-this': 'off',
      'import/first': 'off',
      'import/no-extraneous-dependencies': '[error, { devDependencies: true }]',
      'no-param-reassign': 'off',
    },
  };
  