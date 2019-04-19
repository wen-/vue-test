module.exports = {
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
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/test/, to: '/test.html' },
      ]
    }
  }
};
