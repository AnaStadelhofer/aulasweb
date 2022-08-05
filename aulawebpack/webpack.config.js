const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude:/node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets:['@babel/preset-env']
                },
            },
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        filenaem: "index.html"
    })]
};