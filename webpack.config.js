const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')

var dotenv = require('dotenv').config({ path: __dirname + '/.env' });

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false,
        }),
        new webpack.DefinePlugin({
            process: {
                env: {
                    FIREBASE_API_KEY: JSON.stringify(dotenv.parsed.FIREBASE_API_KEY),
                    FIREBASE_AUTH_DOMAIN: JSON.stringify(dotenv.parsed.FIREBASE_AUTH_DOMAIN),
                    FIREBASE_DATABASE_URL: JSON.stringify(dotenv.parsed.FIREBASE_DATABASE_URL),
                    FIREBASE_PROJECT_ID: JSON.stringify(dotenv.parsed.FIREBASE_PROJECT_ID),
                    FIREBASE_STORAGE_BUCKET: JSON.stringify(dotenv.parsed.FIREBASE_STORAGE_BUCKET),
                    FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(dotenv.parsed.FIREBASE_MESSAGING_SENDER_ID)
                }
            }
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