const path = require('path');
const nodeExternals = require('webpack-node-externals');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/test.ts',
  output: {
    path: path.resolve(process.cwd(), 'dist'), //ビルドしたファイルを吐き出す場所
    filename: 'server.js' //ビルドした後のファイル名
  },
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        exclude: [/node_modules/],
      }
    ]
  },
  // plugins: [
  //   // その他
  //   new htmlwebpackplugin({
  //     // entry: './views/index.ejs',
  //     // output:{
  //       // path: path.resolve(__dirname, 'dist'), //ビルドしたファイルを吐き出す場所
  //       // filename: 'index.html'
  //       template:'index.html'

  //   })
  // ]
};