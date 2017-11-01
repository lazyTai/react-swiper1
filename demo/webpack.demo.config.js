const webpack = require('webpack');
const path = require('path');
const fs = require('fs');


var node_modules = path.resolve(__dirname, 'node_modules');

var config = {
    // watch:true,
    target: 'web',
    entry: path.resolve(__dirname, './1.js'),
    output: {
        path: path.resolve(__dirname, './'),
        filename: '1.bundled.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    devtool: "source-map",
    module: {
        noParse: [],
        exclude: [/node_modules/],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                // include: path.join(__dirname, 'demo'),
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};


module.exports = config;