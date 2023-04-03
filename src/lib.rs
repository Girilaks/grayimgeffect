
use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;
use base64::{ decode, encode };
use image::load_from_memory;
use image::ImageOutputFormat::Png;

#[wasm_bindgen] // simplify by using 'use' keyword
//#[wasm_bindgen::prelude::wasm_bindgen] // Macros
pub fn grayscale(encoded_file: &str) -> String { // Make pub to access in JS
    //log(&encoded_file.into()); // into is used for type conversion // graycale called
    log(&"graycale called".into());

    let base64_to_vector = decode(encoded_file).unwrap(); // doecode is result type so unwarp() is used
    log(&"image decoded".into());

    let mut img = load_from_memory(&base64_to_vector).unwrap();
    log(&"image loaded".into());

    img = img.grayscale();
    log(&"grayscale effect applied".into());

    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    log(&"New image return".into());

    let encoded_image = encode(&buffer);
    let data_url = format!(
        "data:image/png;base64,{}",
        encoded_image
    );

    data_url // return keyword is no need and also no semicolon
}