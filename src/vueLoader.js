module.exports = (options) => {
  return {
    // loaders: utils.cssLoaders({
    //   // sourceMap: use sourcemao or not.
    //   sourceMap: options && options.sourceMapEnabled,
    //   // useVue: use vue-style-loader or not
    //   useVue: options && options.useVue,
    //   // usePostCSS: use postcss to compile styles.
    //   usePostCSS: options && options.usePostCSS
    // }),
    // 这里需要注意下，不注入loaders的话，就需要去weex-vue-loader里面去搞了
    cssSourceMap: true,
    cacheBusting: true,
    lang: {
      less: ['less-loader'],
      scss: ['sass-loader']
    }
  };
};
