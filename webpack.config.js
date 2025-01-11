const path = require("path")
const Dotenv = require("dotenv-webpack")

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "docs"),
    },
    client: {
      overlay: false,
    },
    compress: true,
    port: 9000,
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
  plugins: [new Dotenv()],
}
