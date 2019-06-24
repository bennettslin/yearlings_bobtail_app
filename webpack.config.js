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
        scss: path.resolve(__dirname, 'app/scss'),
        template: path.resolve(__dirname, 'app/index.html')
    },
    commonConfig = (isDevelopment) => {
        return merge([
            {
                /**
                 * Entry accepts a path or an object of entries. We'll be using the
                 * latter form given it's convenient with more complex
                 * configurations.
                 */
                entry: {
                    app: PATHS.app
                },

                output: {
                    path: PATHS.build,
                    filename: '[name]-[hash].js'
                },

                plugins: isDevelopment ? [
                    new webpack.HotModuleReplacementPlugin(),

                    // https://www.codecademy.com/articles/react-setup-iv
                    new HtmlWebpackPlugin({
                        template: PATHS.template,
                        inject: 'body'
                    })
                ] : [
                    new webpack.optimize.OccurrenceOrderPlugin(),

                    new HtmlWebpackPlugin({
                        template: PATHS.template,
                        inject: 'body'
                    })
                ],

                resolve: {
                    // import from files without specifying extensions.
                    extensions: ['.js', '.jsx', '.scss', '.mp3', '.pdf'],
                    alias: {
                        album: path.resolve(__dirname, './app/album'),
                        assets: path.resolve(__dirname, './app/assets'),
                        components: path.resolve(__dirname, './app/components'),
                        constants: path.resolve(__dirname, './app/constants'),
                        flux: path.resolve(__dirname, './app/redux'),
                        handlers: path.resolve(__dirname, './app/handlers'),
                        helpers: path.resolve(__dirname, './app/helpers'),
                        modules: path.resolve(__dirname, './app/modules'),
                        scene: path.resolve(__dirname, './app/scene'),
                        utils: path.resolve(__dirname, './app/utils')
                    }
                }
            },
            parts.loadJavaScript({
                /**
                 * Parse only app files! Without this it will go through the
                 * entire project, which in addition to being slow, will most
                 * likely result in an error.
                 */
                include: PATHS.app
            })
        ])
    },
    developmentConfig = merge([
        parts.loadUrls({
            include: PATHS.app
        }),
        {
            output: {
                devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
            }
        },
        parts.loadBundleAnalyzer(),
        parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
        parts.devServer({
            /**
             * Parse host and port from env so this is easy to customize.
             * 0.0.0.0 is available to all network devices, unlike default
             * localhost.
             */
            host: process.env.HOST,
            port: 1113 || process.env.PORT
        }),
        parts.loadStyles({
            include: PATHS.scss
        })
    ]),
    newProductionConfig = merge([
        parts.loadUrls({
            include: PATHS.app
        }),
        parts.loadStyles({
            include: PATHS.scss
        })
    ]),

    // eslint-disable-next-line no-unused-vars
    productionConfig = merge([
        parts.loadUrls({
            include: PATHS.app,
            isProduction: true
        }),
        parts.clean(PATHS.build),
        parts.minifyJavaScript({ useSourceMap: true }),
        parts.minifyStyles({
            options: {
                discardComments: {
                    removeAll: true
                },
                // Avoid potentially unsafe transformations.
                safe: true
            }
        }),
        parts.generateSourceMaps({ type: 'source-map' }),
        parts.extractStyles({
            include: PATHS.scss
        })
    ])

module.exports = (env) => {
    return merge(
        commonConfig(env.development),
        env.development ?
            developmentConfig :
            newProductionConfig
    )
}
