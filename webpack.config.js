/* global __dirname, process */

/**
 * TODO: Production build and server-side rendering.
 * See tutorials:
 * http://survivejs.com/webpack/building-with-webpack/
 * https://github.com/reactjs/react-router-tutorial (lessons 11 and 13)
 */

const webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    merge = require('webpack-merge'),
    parts = require('./webpack.parts'),
    PATHS = {
        app: path.resolve(__dirname, 'app'),
        build: path.resolve(__dirname, 'build'),
        less: path.resolve(__dirname, 'app/less'),
        template: path.resolve(__dirname, 'app/index.html')
    },
    commonConfig = merge([
        {
            /**
             * Entry accepts a path or an object of entries. We'll be using the latter
             * form given it's convenient with more complex configurations.
             */
            entry: {
                app: PATHS.app
            },

            output: {
                path: PATHS.build,
                filename: '[name].js'
            },

            plugins: process.env.NODE_ENV !== 'production' ? [
                new webpack.HotModuleReplacementPlugin(),

                // https://www.codecademy.com/articles/react-setup-iv
                new HtmlWebpackPlugin({
                    template: PATHS.template,
                    filename: 'index.html',
                    inject: 'body'
                })
            ] : [
                new webpack.optimize.DedupePlugin(),
                new webpack.optimize.OccurrenceOrderPlugin(),
                new webpack.optimize.UglifyJsPlugin()
            ],

            resolve: {
                // import from files without specifying extensions.
                extensions: ['.js', '.jsx', '.less', '.mp3', '.pdf']
            }
        },
        parts.loadJavaScript({
            /**
             * Parse only app files! Without this it will go through the
             * entire project, which in addition to being slow, will most
             * likely result in an error.
             */
            include: PATHS.app
        }),
        parts.loadUrls({
            include: PATHS.app
        })
    ]),
    productionConfig = merge([
        // {
        //     // Establish performance budget.
        //     performance: {
        //         hints: 'warning',
        //         maxEntrypointSize: 100000,
        //         maxAssetSize: 450000
        //     }
        // },
        parts.clean(PATHS.build),
        parts.minifyJavaScript({ useSourceMap: true }),
        parts.minifyStyles({
            options: {
                discardComments: {
                    removeAll: true,
                },
                // Avoid potentially unsafe transformations.
                safe: true
            }
        }),
        parts.generateSourceMaps({ type: 'source-map' }),
        parts.extractStyles({
            include: PATHS.less
        })
    ]),
    developmentConfig = merge([
        {
            output: {
                devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
            }
        },
        parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
        parts.devServer({
            /**
             * Parse host and port from env so this is easy to customize.
             * 0.0.0.0 is available to all network devices, unlike default
             * localhost.
             */
            host: process.env.HOST,
            port: 1337 || process.env.PORT
        }),
        parts.loadStyles({
            include: PATHS.less
        })
    ])

module.exports = (env) => {
    return merge(
        commonConfig,
        env === 'production' ? productionConfig : developmentConfig
    )
}
