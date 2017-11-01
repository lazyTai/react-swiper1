const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack')

const isProduction = () => {
    return NODE_ENV !== 'development';
}

const config = {
    watch: true,
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist/',
        filename: isProduction() ? 'react-component.min.js' : 'react-component.js',
        libraryTarget: 'commonjs2',
        library: 'ReactComponent'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                loader: 'style!css'
            }
        ]
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'react-dom/server': 'react-dom/server'
    },
    plugins: []
}

if (isProduction()) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // don't show unreachable variables etc
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}

module.exports = config;