'use strict';
const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const CleanWebpackPlugin  = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve('./src'),
    entry: './index.js',
    output: {
        path: path.resolve('./dist'),
        filename: `${pkg.name}.js`,
        library: "pce",
    },
    // devtool: 'cheap-source-map',
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(pkg.version),
        })
    ]
};
