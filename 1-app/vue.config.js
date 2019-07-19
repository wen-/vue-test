module.exports = {
  //vue-cli3之后其实不用怎么配置了，详细可查看node-module/@vue/cli-service/lib/config/app.js及其它配置，build时会抽离样式及脚本，业务脚本：app.***.js，第三方类库：chunk-vendors.***.js，动态加载脚本：chunk-***.js,重复使用的脚本：chunk-common.***.js ，业务样式：app.***.js，第三方类库样式：chunk-vendors.***.js 。
  //publicPath: "/vue/",
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
    },
    test: {
      // page 的入口
      entry: 'src/views/test/main.js',
      // 模板来源
      template: 'public/test.html',
      // 在 dist/index.html 的输出
      filename: 'test.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Test Page',
    }
  },
  devServer: {
    host: "0.0.0.0", //本地服务器访问的路径
    port: 8080, //本地服务器访问的端口
    // proxy: {
    //   '/api': {
    //     target: 'http://xx.xx.xx.xx',//接口服务器
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /^\/$/, to: '/index.html' },
    //     { from: /^\/test/, to: '/test.html' },
    //   ]
    // }
  }
  // configureWebpack: {
  //     plugins: [],
  //     externals: {//外置脚本
  //       'vue': 'Vue',
  //       'scrollmagic': 'ScrollMagic',
  //     },
  //   devServer: {
  //     host: "localhost", //本地服务器访问的路径
  //     port: 8008, //本地服务器访问的端口
  //     proxy: {
  //       '/api': {
  //         target: 'http://xx.xx.xx.xx',//接口服务器
  //         changeOrigin: true,
  //         pathRewrite: {
  //           '^/api': ''
  //         }
  //       }
  //     },
  //     historyApiFallback: {
  //       rewrites: [
  //         { from: /^\/$/, to: '/index.html' },
  //         { from: /^\/test/, to: '/test.html' },
  //       ]
  //     }
  //   }
  // },

};
