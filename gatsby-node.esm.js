import webpack from 'webpack'
import path from 'path'
import album from './admin/data'
import format from 'date-fns/format'

export const onCreateWebpackConfig = ({ actions }) => {
    /**
     * The three environments are local, delivery, and production.
     */
    const buildEnvironment = process.env.YB_ENV,
        isLocalDevelopment = buildEnvironment === 'local',
        isDeliveryEnvironment = buildEnvironment !== 'production'

    actions.setWebpackConfig({
        plugins: [
            // Define global constant at compile time.
            new webpack.DefinePlugin({
                // Grab album from global env only when not running locally.
                ...!isLocalDevelopment && {
                    ALBUM: JSON.stringify(album)
                },
                BUILD_DATE_TIME: JSON.stringify(
                    `${format(new Date(), 'MMMM d, yyyy, h:mmaaaaa')}m`
                ),
                IS_DELIVERY: isDeliveryEnvironment,
                IS_LOCAL: isLocalDevelopment
            })
        ],
        resolve: {
            // Import from files without specifying extensions.
            extensions: ['.js', '.jsx', '.mp3', '.pdf', '.scss', '.svg'],
            alias: {
                // Allow admin routes only in delivery.
                routes: isDeliveryEnvironment ?
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
                // {
                //     test: /\.jsx?$/,
                //     include: [
                //         path.resolve(__dirname, './app'),
                //         ...isDeliveryEnvironment ? [path.resolve(__dirname, './admin')] : []
                //     ],
                //     enforce: 'pre',
                //     loaders: [
                //         'babel-loader',
                //         'eslint-loader'
                //     ],
                //     exclude: /node_modules/
                // },
                // {
                //     test: /\.scss$/,
                //     include: [
                //         path.resolve(__dirname, './app'),
                //         ...isDeliveryEnvironment ? [path.resolve(__dirname, './admin')] : []
                //     ],
                //     loaders: [
                //         'style-loader',
                //         'css-loader',
                //         'postcss-loader',
                //         'sass-loader'
                //     ]
                // },
                // {
                //     test: /\.(png|ico)$/,
                //     include: path.resolve(__dirname, './assets/favicon'),
                //     loader: 'file-loader',
                //     options: {
                //         name: './assets/favicon/[name].[ext]'
                //     }
                // },
                // {
                //     test: /\.ttf$/,
                //     include: path.resolve(__dirname, './assets/fonts'),
                //     loader: 'file-loader',
                //     options: {
                //         name: './assets/fonts/[name]-[hash].[ext]'
                //     }
                // },
                // {
                //     test: /\.mp3$/,
                //     include: path.resolve(__dirname, './assets/mp3s'),
                //     loader: 'file-loader',
                //     options: {
                //         name: './assets/mp3s/[name]-[hash].[ext]'
                //     }
                // },
                // {
                //     test: /\.pdf$/,
                //     include: path.resolve(__dirname, './assets/scores'),
                //     loader: 'file-loader',
                //     options: {
                //         name: './assets/scores/[name]-[hash].[ext]'
                //     }
                // },
                // {
                //     test: /\.svg$/,
                //     include: path.resolve(__dirname, './assets/svgs'),
                //     loader: 'file-loader',
                //     options: {
                //         name: './assets/svgs/[name]-[hash].[ext]'
                //     }
                // }
            ]
        }
    })
}
