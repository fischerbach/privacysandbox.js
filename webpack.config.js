const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env) => {
  if (env.target.development) {
    return {
      mode: 'development',

      entry: './src/index.js',
      plugins: [
        new HtmlWebpackPlugin({
        title: 'PrivacySandbox - ex ',
        }),
      ],

      devtool: 'inline-source-map',
      devServer: {
        contentBase: './dist',
      },

      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'privacysandbox.min.js',
        library: {
            name: 'PrivacySandbox',
            type: 'umd',
        },
        publicPath: '/'
      },
    }
  } else {
    return {
      mode: 'production',

      entry: './src/index.js',
      plugins: [
        new HtmlWebpackPlugin({
        title: 'PrivacySandbox - ex ',
        }),
      ],

      devServer: {
        contentBase: './dist',
      },

      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'privacysandbox.min.js',
        library: {
            name: 'PrivacySandbox',
            type: 'umd',
        },
        publicPath: '/'
      },
    }
  }
};