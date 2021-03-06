const path = require('path')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const options = {
    mode: 'development',
    devtool: 'eval',
    entry: {
        main: ['react-hot-loader/patch'],
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    output: {
        chunkFilename: '[id].chunk.js',
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        compress: false,
        contentBase: path.join(__dirname, './src/assets'),
        allowedHosts: [
            'localhost',
        ],
        disableHostCheck: true,
        hot: true,
        hotOnly: true,
        historyApiFallback: true,
        port: 8080,
    },
}

if (process.argv.includes('--analyze')) {
    options.plugins.push(
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    )
}

module.exports = options
