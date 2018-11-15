const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const SwPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "assets/js/[name].min.js",
    chunkFilename: "assets/js/[name]/[name].min.js",
    path: path.resolve(__dirname, "build"),
    publicPath: ""
  },
  resolve: {
    alias: { vue: "vue/dist/vue.min.js" }    // Setting vue mode
  },
  plugins: [
    new webpack.DefinePlugin({          // Setting production mode
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new TerserPlugin(),
    new SwPrecacheWebpackPlugin({
      cacheId: "asbioybasiy%_Heima-Vue_%dvas=!%%#23423",
      filename: "serviceWorker.js",
      staticFileGlobs: [ "build/**/*.{js,html,css}" ],
      minify: true,
      stripPrefix: "build/"
    })
  ]
});
