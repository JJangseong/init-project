
const merge = require('webpack-merge');
const config = require('./base');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(config, {
    mode: 'production',
    plugins: [
        ...[
            new uglifyjsWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    ]
});