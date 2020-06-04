/** Used by legacy webpack setup. */
import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import format from 'date-fns/format'
import album from './admin/data/album'
import scene from './admin/data/scene'

const SHOW_BUNDLE_ANALYZER = false

export default ({
    // Applies to just local development
    local: isLocalDevelopment = false,

    // Applies to both local development and staging release.
    staging: isStagingEnvironment = false
} = {}) => {
    // Dev sanity check.
    album._build = 'compiled'
    scene._build = 'compiled'

    return {
        entry: path.resolve(__dirname, 'app'),
        output: {
            path: isStagingEnvironment ?
                path.resolve(__dirname, 'build__delivery') :
                path.resolve(__dirname, 'build'),
            filename: '[name]-[hash].js',
            ...isLocalDevelopment && {
                devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
            }
        },
        plugins: [
            // Define global constant at compile time.
            new webpack.DefinePlugin({
                // Grab album from global env in staging and production.
                ...!isLocalDevelopment && {
                    ALBUM: JSON.stringify(album),
                    SCENE: JSON.stringify(scene)
                },
                BUILD_DATE_TIME: JSON.stringify(
                    `${format(new Date(), 'MMMM d, yyyy, h:mmaaaaa')}m`
                ),
                IS_STAGING: isStagingEnvironment,
                IS_LOCAL: isLocalDevelopment
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'app/index.html')
            }),
            ...isLocalDevelopment ? [
                new webpack.HotModuleReplacementPlugin(),

                ...SHOW_BUNDLE_ANALYZER ? [new BundleAnalyzerPlugin()] : []
            ] : [
                new webpack.optimize.OccurrenceOrderPlugin(),

                // Remove the previous build.
                new CleanWebpackPlugin()
            ]
        ],
        resolve: {
            // Import from files without specifying extensions.
            extensions: ['.js', '.jsx', '.mp3', '.pdf', '.scss', '.svg'],
            alias: {
                // Allow admin routes only in local and staging.
                routes: isStagingEnvironment ?
                    path.resolve(__dirname, './admin/routes') :
                    path.resolve(__dirname, './app/routes'),
                // Grab data from admin folder in local development.
                data: isLocalDevelopment ?
                    path.resolve(__dirname, './admin/data') :
                    path.resolve(__dirname, './app/data')
            }
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: [
                        path.resolve(__dirname, './app'),
                        ...isStagingEnvironment ? [path.resolve(__dirname, './admin')] : []
                    ],
                    enforce: 'pre',
                    loaders: [
                        'babel-loader',
                        'eslint-loader'
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    include: [
                        path.resolve(__dirname, './app'),
                        ...isStagingEnvironment ? [path.resolve(__dirname, './admin')] : []
                    ],
                    loaders: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|ico)$/,
                    include: path.resolve(__dirname, './assets/favicon'),
                    loader: 'file-loader',
                    options: {
                        name: './assets/favicon/[name].[ext]'
                    }
                },
                {
                    test: /\.ttf$/,
                    include: path.resolve(__dirname, './assets/fonts'),
                    loader: 'file-loader',
                    options: {
                        name: './assets/fonts/[name]-[hash].[ext]'
                    }
                },
                {
                    test: /\.mp3$/,
                    include: path.resolve(__dirname, './assets/mp3s'),
                    loader: 'file-loader',
                    options: {
                        name: './assets/mp3s/[name]-[hash].[ext]'
                    }
                },
                {
                    test: /\.pdf$/,
                    include: path.resolve(__dirname, './assets/scores'),
                    loader: 'file-loader',
                    options: {
                        name: './assets/scores/[name]-[hash].[ext]'
                    }
                },
                {
                    test: /\.svg$/,
                    include: path.resolve(__dirname, './assets/svgs'),
                    loader: 'file-loader',
                    options: {
                        name: './assets/svgs/[name]-[hash].[ext]'
                    }
                }
            ]
        },
        ...isLocalDevelopment && {
            devServer: {
                host: process.env.HOST,
                port: 1113 || process.env.PORT,
                disableHostCheck: true,
                // Needed for proper routing.
                historyApiFallback: true,
                hot: true,
                inline: true,
                overlay: true,
                stats: 'minimal'
            },
            devtool: 'cheap-module-eval-source-map'
        }
    }
}
