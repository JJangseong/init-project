const path = require('path');
const merge = require('webpack-merge');
const config = require('./base');

module.exports = merge(config, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, '..', 'dist'),
        compress: true,
        watchContentBase: true,
        overlay: true,
        stats: 'errors-only',
        host: '0.0.0.0'
    },
});