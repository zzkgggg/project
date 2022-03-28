const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    externals: {
      'BMap': 'BMap',
      'BMap_Symbol_SHAPE_POINT': 'BMap_Symbol_SHAPE_POINT'
    }
  },
  chainWebpack: config => {
    config.module
        .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .use('px2rem-loader')
        .loader('px2rem-loader')
        .options({
          remUnit: 160,
          remPrecision: 8
        })
        .end()
  }


})
