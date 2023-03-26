const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {

    proxy: {
      '^/': { 
        target: 'http://178.172.137.253:8020',
        changeOrigin: true,
        secure: false, 
        ws: false
      }
    }
  },

  
  configureWebpack: {
    devtool: 'source-map'
  }
  
})
