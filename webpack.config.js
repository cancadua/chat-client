const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});

module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    performance: { hints: false },
    devServer: {
        historyApiFallback: true,
        port: process.env.PORT || 3001,
        hot: true,
        static: {
            directory: path.join(__dirname, 'public'),
            watch: {
                ignored: /node_modules/,
            },
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }), htmlPlugin]
};