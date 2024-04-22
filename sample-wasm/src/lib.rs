use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u64) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 2) + fibonacci(n - 1)
    }
}
