module.exports = {
  entry: {
    main: "./main.js",
  },
  // 让打包后的文件更加清晰
  mode: "development",
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      // 以js结尾的文件都进行babel-loader转化
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                { pragma: "createElement" },
              ],
            ],
          },
        },
      },
    ],
  },
};
