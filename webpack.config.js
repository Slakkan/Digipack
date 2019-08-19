const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json', '.css']
    }
}