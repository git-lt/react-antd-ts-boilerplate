// 参考 antd eslintrc https://github.com/ant-design/ant-design/blob/master/.eslintrc.js
// https://juejin.im/post/5e3915f4f265da5735503f17#heading-0
// ESlint配置说明: https://juejin.im/post/5e6355f96fb9a07cb031603d

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    // 解决与eslint规则冲突
    // 专门支持了 eslint-plugin-react
    'prettier/react',
    // 专门支持了 @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  settings: {
    react: {
      version: '16.9',
    },
    'import/resolver': {
      node: {
        // 指定 eslint-plugin-import 解析的后缀名
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
      // 解决 不能正确解析 tsconfig.json 中的 paths 映射
      typescript: {
        directory: './tsconfig.json',
      },
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'babel', '@typescript-eslint', 'react-hooks'],
  // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 2,
      },
    },
  ],

  // 提示：遇到可以解除的规则，请参考 antd 的配置
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 0,
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'react/display-name': 0,
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,

    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,

    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'max-classes-per-file': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  globals: {},
};
