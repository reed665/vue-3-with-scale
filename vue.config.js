/* eslint-disable no-param-reassign */

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        // https://v3.vuejs.org/guide/migration/custom-elements-interop.html#autonomous-custom-elements
        options.compilerOptions = {
          isCustomElement: (tag) => tag.startsWith('scale-'),
        };
        return options;
      });
  },
});
