import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import format from 'date-fns/format'

const SHOW_BUNDLE_ANALYZER = false

const getConfig = ({
    development: isDevelopment = false,
    admin: showAdmin = false
} = {}) => {
    return {
        entry: path.resolve(__dirname, 'app'),
        output: {
            path: showAdmin ?
                path.resolve(__dirname, 'build__delivery') :
                path.resolve(__dirname, 'build'),
            filename: '[name]-[hash].js',
            ...isDevelopment && {
                devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
            }
        },
        plugins: [
            // Define global constant at compile time.
            new webpack.DefinePlugin({
                BUILD_DATE_TIME: JSON.stringify(
                    `${format(new Date(), 'MMMM d, yyyy, h:mmaaaaa')}m`
                )
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'app/index.html')
            }),
            ...isDevelopment ? [
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
                // In production, admin just reroutes to app.
                env: showAdmin ?
                    path.resolve(__dirname, './admin') :
                    path.resolve(__dirname, './app/env')
            }
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: [
                        path.resolve(__dirname, './app'),
                        ...showAdmin ? [path.resolve(__dirname, './admin')] : []
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
                        ...showAdmin ? [path.resolve(__dirname, './admin')] : []
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
        ...isDevelopment && {
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

export default getConfig
