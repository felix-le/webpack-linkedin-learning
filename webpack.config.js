const path = require("path");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },

  plugins:[
    new MomentLocalesPlugin(),
 
    // Or: To strip all locales except “en”, “es-us” and “ru”
    // (“en” is built into Moment and can’t be removed)
    new MomentLocalesPlugin({
        localesToKeep: ['es-us', 'ru'],
    }),
    new ESLintPlugin('./.eslintrc.json')
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader'
        }]
      }
    ]
  }
}