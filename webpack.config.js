const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
    entry: './public/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js' // filename produced by webpack
    },
    plugins: [
        new HtmlWebPackPlugin({ // Generally it genetate custom html. So, we need to give exact template
            template:'./public/index.html'
        }),
        new WasmPackPlugin({ // It look the path which Rust code want to convrt WebAssembly
            crateDirectory: path.resolve(__dirname, '.') // '.' - indicates root path
        })
    ],
    experiments: {
        asyncWebAssembly: true 
    }
} 