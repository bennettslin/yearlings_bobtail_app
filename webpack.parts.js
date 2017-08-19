const ExtractTextPlugin = require('extract-text-webpack-plugin'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    CleanPlugin = require('clean-webpack-plugin'),
    BabiliPlugin = require('babili-webpack-plugin'),
    OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    cssnano = require('cssnano')

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
            warnings: false
        },

        // Display only errors to reduce the amount of output.
        stats: 'errors-only'
    }
})

exports.loadBundleAnalyzer = () => ({
    plugins: [
        new BundleAnalyzerPlugin()
    ]
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

exports.minifyJavaScript = () => ({
    plugins: [
        new BabiliPlugin()
    ]
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

exports.extractStyles = ({ include }) => {
    const plugin = new ExtractTextPlugin({
        filename: '[name].css'
    })

    return {
        module: {
            rules: [
                {
                    include,

                    // http://survivejs.com/webpack/loading-assets/loading-styles/
                    test: /\.less$/,
                    use: plugin.extract({
                        use: [
                            'css-loader',

                            // Add vendor prefixes after compiling from less.
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: () => ([
                                        require('autoprefixer')
                                    ])
                                }
                            },
                            'less-loader'
                        ],
                        fallback: 'style-loader'
                    })
                }
            ]
        },
        plugins: [ plugin ]
    }
}

exports.minifyStyles = ({ options }) => ({
    plugins: [
        new OptimizeCSSAssetsPlugin({
            cssProcessor: cssnano,
            cssProcessorOptions: options,
            canPrint: false
        })
    ]
})

exports.generateSourceMaps = ({ type }) => ({
    devtool: type
})

exports.loadUrls = ({ include, isProduction }) => {

    return isProduction ? {
        module: {
            rules: [
                {
                    include,
                    test: /\.(ttf)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 50000,
                        name: 'assets/fonts/[name]-[hash].[ext]',
                        publicPath: './'
                    }
                },
                {
                    include,
                    test: /\.(mp3)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 50000,
                        name: 'assets/mp3s/[name]-[hash].[ext]',
                        publicPath: './'
                    }
                },
                {
                    include,
                    test: /\.(pdf)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 50000,
                        name: 'assets/scores/[name]-[hash].[ext]',
                        publicPath: './'
                    }
                },
                {
                    include,
                    test: /\.(svg|png|jpg|gif)$/,
                    loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
                }
            ]
        }
    } : {
        module: {
            rules: [
                {
                    include,
                    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|mp3|pdf)$/,
                    loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
                }
            ]
        }
    }
}

exports.clean = (path) => ({
    plugins: [
        new CleanPlugin([path])
    ]
})
