const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BabelPluginSyntaxDynamicImport = require("babel-plugin-syntax-dynamic-import");

module.exports = {
  entry: {
    index: "./app/js/app.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [ "vue-loader" ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: { plugins: [ BabelPluginSyntaxDynamicImport ] }
      },
      {
        test: /\.css$/,
        loader: [ "style-loader", "css-loader" ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        loader: [ "file-loader?name=assets/image/[name].[ext]" ]
      },
      {
        test: /manifest\.json$/,
        loader: "w3c-manifest-loader",
        type: "javascript/auto",
        options: {
          name: "[name].[ext]",
          icon: "assets/image/icons/[name].[ext]",
          legacyAppleSupport: true
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      favicon: "app/image/icon/favicon.png",
      template: "app/index.html"
    })
  ]
};
