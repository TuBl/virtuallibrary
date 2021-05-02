// const path  = require('path');
const MODE = process.env.NODE_ENV === 'production' ? 'production' : 'development'
module.exports = {
    // entry: './src/index.js',
    // output: {
    //   filename: 'main.js',
    //   path: path.resolve(__dirname, 'public'),
    // },
    mode: MODE,
    devtool: 'source-map',
    devServer: {
      contentBase: './dist'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
  };