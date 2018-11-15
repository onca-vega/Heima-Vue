const path = require("path");
const merge = require("webpack-merge");
const SwPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "assets/js/[name].bundle.js",
    chunkFilename: "assets/js/[name]/[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: ""
  },
  resolve: {
    alias: { vue: "vue/dist/vue.js" }    // Setting vue mode
  },
  devServer: {
    contentBase: "./build",
    port: 4200
  },
  plugins: [
    new SwPrecacheWebpackPlugin({
      cacheId: "asbioybasiy%_Heima-Vue_%dvas=!%%#23423",
      filename: "serviceWorker.js",
      staticFileGlobs: [ "build/**/*.{js,html,css}" ],
      minify: false,
      stripPrefix: "build/"
    })
  ]
});
