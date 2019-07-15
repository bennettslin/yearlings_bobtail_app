import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const getConfig = ({ development }) => {
    return {
        entry: path.resolve(__dirname, 'app'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name]-[hash].js',
            ...development && {
                devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'app/index.html')
            }),
            ...development ? [
                new webpack.HotModuleReplacementPlugin(),
                new BundleAnalyzerPlugin()
            ] : [
                new webpack.optimize.OccurrenceOrderPlugin()
            ]
        ],
        resolve: {
            // import from files without specifying extensions.
            extensions: ['.js', '.jsx', '.scss', '.mp3', '.pdf', '.svg'],
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
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    enforce: 'pre',
                    loaders: [
                        'babel-loader',
                        'eslint-loader'
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    loaders: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(ttf|mp3|pdf)$/,
                    loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
                },
                {
                    test: /\.(svg)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 50000,
                        name: 'assets/svgs/[name]-[hash].[ext]',
                        publicPath: './'
                    }
                }
            ]
        },
        ...development && {
            devServer: {
                host: process.env.HOST,
                port: 1113 || process.env.PORT,
                disableHostCheck: true,
                historyApiFallback: true, // Needed for proper routing.
                hot: true,
                inline: true,
                overlay: true,
                stats: 'errors-only'
            },
            devtool: 'cheap-module-eval-source-map'
        }
    }
}

export default getConfig
