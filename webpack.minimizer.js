/* eslint  import/no-extraneous-dependencies:0 */
const TerserPlugin = require("terser-webpack-plugin");

module.exports = [
  new TerserPlugin({
    parallel: true,
    terserOptions: {
      ecma: 2016,
    },
  }),
];
