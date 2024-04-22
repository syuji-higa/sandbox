import init, { fibonacci } from "sample-wasm/sample_wasm.js";

init().then(() => {
  console.log(fibonacci(8n));
})
