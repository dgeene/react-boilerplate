const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: "./public/index.html",
    filename: "./index.html",
    baseUrl: "/"
  })
];

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/" // used when webpack-dev-server has public ip. allows reloading
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins,
  devServer: {
    disableHostCheck: true // security risk. I use it when i'm devloping on a headless machine
  }
};
