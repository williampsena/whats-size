var webpack = require('webpack');

module.exports = {
    entry: './src/client.ts',
    output: {
        filename: './lib/client/whats-size.webpack.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.json$/, loader: 'json' }
        ]
    }
};