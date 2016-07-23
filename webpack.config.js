const webpack = require('webpack');
const path = require('path');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build_dev: path.join(__dirname, 'build_dev'),
    style: path.join(__dirname, 'app/less')
};

module.exports = {

    /**
     * Entry accepts a path or an object of entries. We'll be using the latter
     * form given it's convenient with more complex configurations.
     */
    entry: {
        app: PATHS.app
    },

    output: {
        path: PATHS.build_dev,
        filename: 'bundle.js'
    },

    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [],

    module: {
        loaders: [
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            },
            {
                // http://survivejs.com/webpack/loading-assets/loading-styles/
                test: /\.less$/,
                loader: 'style!css!less',
                include: PATHS.style
            },
            {
                // Set up jsx. This accepts js too, thanks to RegExp.
                test: /\.jsx?$/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
                /**
                 * Parse only app files! Without this it will go through the
                 * entire project. In addition to being slow, that will most
                 * likely result in an error.
                 */
                include: PATHS.app
            }
        ]
    }
}
