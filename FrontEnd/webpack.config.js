const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx$/,
        loader: 'tslint-loader',
        exclude: [/node_modules/],
        options: {
          emitErrors: true
        }
      },
      {
        loader: 'ts-loader',
        test: /\.tsx$/,
        exclude: [/node_modules/],
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
}
