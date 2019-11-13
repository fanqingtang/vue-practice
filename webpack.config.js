const path = require('path');   // 引入路径模块
const HtmlWebpackPlugin = require('html-webpack-plugin');    // 引入 html文件
const VueLoaderPlugin = require('vue-loader/lib/plugin');    // 引入vue-loader解析
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');  // 显示加载进度
module.exports = {
  entry: './src/index.js',        // 入口文件
  output: {                       // 出口文件  
    filename: 'bundle.[hash:4].js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,       // 解析vue文件
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),           // new vue解析类
    new HtmlWebpackPlugin({          // new HtmlWebpackPlugin 类
      template: './src/index.html'
    }),
    new ProgressBarWebpackPlugin()   // 显示加载 进度
  ],
  devServer:{
    contentBase: './dist',
    host: 'localhost',
    port: 3001,
    open: false,
    hot: true
  },
  mode: 'development'          // 模式配置     
}