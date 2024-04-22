const path = require("path");
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
  plugins: [
    new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, 'crate'),

        // Check https://rustwasm.github.io/wasm-pack/book/commands/build.html for
        // the available set of arguments.
        //
        // Optional space delimited arguments to appear before the wasm-pack
        // command. Default arguments are `--verbose`.
        args: '--log-level warn',
        // Default arguments are `--typescript --target browser --mode normal`.
        extraArgs: '--no-typescript',
    })]
};
