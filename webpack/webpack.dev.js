const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
    // host: "0.0.0.0",
    hot: true,
    port: 1234,
    open: true,
  },
});
