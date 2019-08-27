const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')

module.exports = env => {
    process.env.NODE_ENV = env.NODE_ENV || 'development'

    if (process.env.NODE_ENV === 'development') {
        var dotenv = require('dotenv').config({ path: __dirname + '/.env' });
        process.env = dotenv.parsed
        console.log('patatas')
    }
    
    return {
        mode: "development",
        entry: "./src/index.tsx",
        target: 'node',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: "[name].js"
        },
        plugins: [],
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
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                ignoreOrder: false,
            }),
            new webpack.DefinePlugin({
                process: {
                    env: {
                        FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
                        FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                        FIREBASE_DATABASE_URL: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                        FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                        FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                        FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
                    }
                }
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            historyApiFallback: true
        },
        devtool: "inline-source-map",
        resolve: {
            extensions: ['.js', '.ts', '.tsx', '.json', '.css']
        }
    }
}

