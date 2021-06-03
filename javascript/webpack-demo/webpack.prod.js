const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production', //production
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.[contenthash].js', //has形式文件名
        path: path.join(__dirname, 'dist')
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ]
}

