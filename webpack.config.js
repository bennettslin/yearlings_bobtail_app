/* global __dirname, process */

/**
 * TODO: Production build and server-side rendering.
 * See tutorials:
 * http://survivejs.com/webpack/building-with-webpack/
 * https://github.com/reactjs/react-router-tutorial (lessons 11 and 13)
 */

/**
 * Linting:
 * http://devnull.guru/adding-eslint-to-your-project-is-easier-than-ever/
 * http://survivejs.com/webpack/advanced-techniques/linting/
 */

const webpack = require('webpack'),
    path = require('path'),
    PATHS = {
        app: path.resolve(__dirname, 'app'),
        build: path.resolve(__dirname, 'build'),
        less: path.resolve(__dirname, 'app/less')
    };

module.exports = {

    resolve: {
        // import from files without specifying extensions.
        extensions: ['', '.js', '.jsx', '.less', '.mp3', '.pdf']
    },

    /**
     * Entry accepts a path or an object of entries. We'll be using the latter
     * form given it's convenient with more complex configurations.
     */
    entry: {
        app: PATHS.app
    },

    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },

    /**
     * From Enzyme docs:
     * http://airbnb.io/enzyme/docs/guides/webpack.html
     */
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },

    devServer: {
        contentBase: PATHS.build,

        /**
         * Enable history API fallback so HTML5 History API based
         * routing works. This is a good default that will come
         * in handy in more complicated setups.
         */
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        /**
         * Parse host and port from env so this is easy to customize.
         * 0.0.0.0 is available to all network devices, unlike default
         * localhost.
         */
        host: process.env.HOST,
        port: 1337 || process.env.PORT
    },

    plugins: process.env.NODE_ENV !== 'production' ? [
        new webpack.HotModuleReplacementPlugin()
    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],

    module: {
        loaders: [
            {
                // Set up jsx. This accepts js too, thanks to RegExp.
                test: /\.jsx?$/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
                /**
                 * Parse only app files! Without this it will go through the
                 * entire project, which in addition to being slow, will most
                 * likely result in an error.
                 */
                include: PATHS.app
            },
            {
                // http://survivejs.com/webpack/loading-assets/loading-styles/
                test: /\.less$/,
                loader: 'style!css!less',
                include: PATHS.less
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|mp3|pdf)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
                include: PATHS.app
            }
        ]
    }
}
