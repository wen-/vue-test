// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: {
    // plugins: [],
    // externals: {
    //   'vue': 'Vue',
    //   'scrollmagic': 'ScrollMagic',
    // },
  },

  devServer: {
    host: "0.0.0.0", //本地服务器访问的路径
    port: 8088, //本地服务器访问的端口
  },
  // pages: {
  //   about: {
  //     entry: "src/about.js",
  //     template: "public/about.html",
  //     filename: "about.html",
  //     title: "了解我们",
  //     chunks: ["chunk-vendors", "chunk-common", "about"]
  //   },
  //   safe: {
  //     entry: "src/safe.js",
  //     template: "public/safe.html",
  //     filename: "safe.html",
  //     title: "安全保障",
  //     chunks: ["chunk-vendors", "chunk-common", "safe"]
  //   }
  // }
};
