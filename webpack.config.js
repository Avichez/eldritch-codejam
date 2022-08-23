const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development";

const devMode = mode === "development";

const target = devMode ? "web" : "browserslist";

const devtool = devMode ? "source-map" : undefined;

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 3000,
        open: true,
        hot: true,
    },
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
        filename: "main.js",
        assetModuleFilename: "assets/[name][ext]",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(c|sc)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.woff2?$/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext]",
                },
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                type: "assets/resource",
            },
            {
                test: /\.js$/,
                exclude: /(node_moduels)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@label/preset-env"],
                    },
                },
            },
        ],
    },
};
