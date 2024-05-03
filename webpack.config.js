const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "none",
    entry: `./src/app.js`,
    devtool: "inline-source-map",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `./build`),
        clean: true,
    },
    devServer: {
        open: true,
        hot: true,
        static: [
            {
                directory: path.join(__dirname, './'),
                publicPath: "/",
                serveIndex: true,
            },
        ],
        devMiddleware: {
            writeToDisk: true,
        },
        compress: true,
        port: 3002,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ],

    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        }),
    ],
};
