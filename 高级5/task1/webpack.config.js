HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/dist",//打包后的文件存放的地方
    filename: "bundle.js",//打包后输出文件的文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './task1.html', // html模板路径,模板路径是支持传参调用loader的,
    }),
  ]
}
