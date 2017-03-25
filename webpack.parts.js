exports.devServer = ({ contentBase, host, port } = {}) => ({
    devServer: {
        contentBase,
        host,
        port,

        /**
         * Enable history API fallback so HTML5 History API based
         * routing works. This is a good default that will come
         * in handy in more complicated setups.
         */
        historyApiFallback: true,
        hot: true,
        inline: true,

        // Capture errors in overlay.
        overlay: {
            errors: true,
            warnings: true
        },

        progress: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only'
    }
})

exports.loadJavaScript = ({ include }) => ({
    module: {
        loaders: [
            {
                include,

                // Set up jsx. This accepts js too, thanks to RegExp.
                test: /\.jsx?$/,
                enforce: 'pre',
                loaders: [
                    'babel-loader?presets[]=es2015&presets[]=react',
                    'eslint-loader'
                ]
            }
        ]
    }
})

exports.loadStyles = ({ include }) => ({
    module: {
        loaders: [
            {
                include,

                // http://survivejs.com/webpack/loading-assets/loading-styles/
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    }
})

exports.loadUrls = ({ include }) => ({
    module: {
        loaders: [
            {
                include,
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|mp3|pdf)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    }
})
