import TerserPlugin from "terser-webpack-plugin";

export default [
  new TerserPlugin({
    parallel: true,
    terserOptions: {
      ecma: 2016,
    },
  }),
];
