const path = require("path");

module.exports = {
  devtool: "eval",
  entry: ["index.tsx"],

  output: {
    filename: "app.js",
    publicPath: "dist",
    path: path.resolve("dist")
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["src", "node_modules"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        include: path.resolve("src")
      }
    ]
  }
};
