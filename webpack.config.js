const path = require('path');   // 引入路径模块
const HtmlWebpackPlugin = require('html-webpack-plugin');    // 引入 html文件
const VueLoaderPlugin = require('vue-loader/lib/plugin');    // 引入vue-loader解析
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');  // 显示加载进度
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');  // 拆分css
const Webpack = require('webpack');
module.exports = {
  entry: './src/index.js',        // 入口文件
  output: {                       // 出口文件  
    filename: 'bundle.[hash:4].js',
    path: path.resolve('dist')
    // publicPath: '/demo'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,       // 解析vue文件
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: /src/,           // 只转化 src 目录下的js
        exclude: /node_modules/   // 排除掉 node_modules, 优化打包速度
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader:'url-loader',
            options: {
              limit: 8192,           // 小于 8k 的图片自动转成base64格式，并且不会存在实体图片 
              outputPath: 'images/'  //图片打包之后存放的目录
            }
          }
        ]
        // test: /.(jpg|png|gif|svg)$/,
        // loader: 'url-loader?limit=8192&name=[name].[ext]?[hash]'  
      },
      {
        test: /\.(htm | html)$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),           // new vue解析类
    new HtmlWebpackPlugin({          // new HtmlWebpackPlugin 类
      template: './src/index.html'
    }),
    new ProgressBarWebpackPlugin(),   // 显示加载 进度
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery:'jquery',
      "window.jQuery": 'jquery',
      Popper: ['popper.js', 'default']
    })
  ],
  devServer:{
    // contentBase: './dist',
    host: 'localhost',
    port: 3001,
    open: false,
    hot: true
  },
  mode: 'development',          // 模式配置
  resolve: {
    alias: {},
    extensions: ['.js', '.vue', '.json']
  }     
}