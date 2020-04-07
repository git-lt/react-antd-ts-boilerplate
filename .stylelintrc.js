// 参考 antd stylelintrc https://github.com/ant-design/ant-design/blob/master/.stylelintrc.json
// [stylelint DOC](https://cloud.tencent.com/developer/section/1489630)
// [为什么需要校验 CSS 规则](https://segmentfault.com/a/1190000012112953)

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'comment-empty-line-before': null,
    // 函数名小写
    'function-name-case': ['lower'],
    'no-invalid-double-slash-comments': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    // 不强制属性的书写顺序
    'declaration-block-properties-order': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        //解决 :global 不是标准的css选择器，stylelint 不识别
        ignorePseudoClasses: ['global'],
      },
    ],
  },
  // stylelint 插件目前有个 bug，默认居然会 lint .d.ts 文件然后报错
  ignoreFiles: ['./src/**/*.d.ts'],
};
