exports.devServer = ({ host, port } = {}) => ({
    devServer: {
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

        // Display only errors to reduce the amount of output.
        stats: 'errors-only'
    }
})

exports.loadJavaScript = ({ include }) => ({
    module: {
        rules: [
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
        rules: [
            {
                include,

                // http://survivejs.com/webpack/loading-assets/loading-styles/
                test: /\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
})

// exports.autoprefixStyles = () => {
//     loader: 'postcss-loader',
//     options: {
//         plugins: () => ([
//             require('autoprefixer')
//         ])
//     }
// }

exports.loadUrls = ({ include }) => ({
    module: {
        rules: [
            {
                include,
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|mp3|pdf)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    }
})
