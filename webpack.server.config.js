// For server-side rendering in production. Doesn't currently work.

const fs = require('fs');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const PATHS = {
    app: path.join(__dirname, 'app'),
    build_prod: path.join(__dirname, 'build_prod')
};

module.exports = {

    entry: path.resolve(__dirname, 'server.js'),

    output: {
        path: PATHS.build_prod,
        filename: 'bundle.js'
    },

    target: 'node',

    // Keep node_module paths out of the bundle.
    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
            'react-dom/server'
        ]).reduce(function (ext, mod) {
            ext[mod] = 'commonjs ' + mod
            return ext
    }, {}),

    node: {
        __filename: false,
        __dirname: false
    },

    module: {
        loaders: [
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            },
            {
                // http://survivejs.com/webpack/loading-less-or-sass/
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'style!css!less'),
                include: PATHS.app,
                exclude: /node_modules/
            },
            {
                // Set up jsx. This accepts js too, thanks to RegExp.
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },

    plugins: [
      // Output extracted CSS to a file.
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
}
