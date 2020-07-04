const path = require('path');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        vendor: ['react', 'react-dom'],
        app: path.join(__dirname, '..', 'src', 'index.tsx')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true,
                },
            },
        },
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            'components': path.resolve(__dirname, '..', 'src', 'components'),
            'containers': path.resolve(__dirname, '..', 'src', 'containers'),
            'assets': path.resolve(__dirname, '..', 'src', 'assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: [miniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.()$/,  // font등의 파일 확장자 regExp
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: './dist'
                    }
                }
            },
            {
                test: /\.()$/,  // 이미지 확장자 regExp
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]?[hash]',  // 파일명 또는 파일해쉬값
                        publicPath: './dist/',  // 빌드 후 limit가 넘는 파일 위치
                        limit: 10000  // 10000byte 제한
                    }
                }
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '..', 'dist')
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'src', 'index.html')
        })
    ]
}