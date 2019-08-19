const path = require('path')

module.exports = {
    "mode": "development",
    "entry": "./src/index.tsx",
    "output": {
        "path": path.join(__dirname, 'dist'),
        "filename": "[name].js"
    },
    "module": {
        "rules": [
            {
                "test": /\.tsx?$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "ts-loader",
                    "options": {
                        "transpileOnly": true
                    }
                }
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
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