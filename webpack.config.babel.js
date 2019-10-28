import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

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
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'app/index.html')
            }),
            ...isDevelopment ? [
                new webpack.HotModuleReplacementPlugin(),

                ...SHOW_BUNDLE_ANALYZER && [new BundleAnalyzerPlugin()]
            ] : [
                new webpack.optimize.OccurrenceOrderPlugin(),

                // Remove the previous build.
                new CleanWebpackPlugin()
            ]
        ],
        resolve: {
            // Import from files without specifying extensions.
            extensions: ['.js', '.jsx', '.scss', '.mp3', '.pdf', '.svg'],
            alias: {
                // In production, admin just reroutes to app.
                admin: showAdmin ?
                    path.resolve(__dirname, './admin') :
                    path.resolve(__dirname, './app'),
                assets: path.resolve(__dirname, './assets'),
                album: path.resolve(__dirname, './app/album'),
                components: path.resolve(__dirname, './app/components'),
                constants: path.resolve(__dirname, './app/constants'),
                flux: path.resolve(__dirname, './app/redux'),
                handlers: path.resolve(__dirname, './app/handlers'),
                helpers: path.resolve(__dirname, './app/helpers'),
                // Replace the lodash package with vanilla code.
                lodash: path.resolve(__dirname, './app/utils/lodash'),
                modules: path.resolve(__dirname, './app/modules'),
                scene: path.resolve(__dirname, './app/scene'),
                svg: path.resolve(__dirname, './app/svg'),
                utils: path.resolve(__dirname, './app/utils')
            }
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: [
                        path.resolve(__dirname, './app'),
                        ...showAdmin && [path.resolve(__dirname, './admin')]
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
                        ...showAdmin && [path.resolve(__dirname, './admin')]
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
