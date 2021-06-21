const path = require('path');

module.exports = {
  // 1
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
{
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  // 2
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // 3
  devServer: {
contentBase: path.resolve(__dirname, './dist'),
  }
};
