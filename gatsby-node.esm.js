import webpack from 'webpack'
import path from 'path'
import album from './admin/data'
import format from 'date-fns/format'

export const onCreateWebpackConfig = ({ actions }) => {
    /**
     * The three environments are local, delivery, and production.
     */
    const { YB_ENV: buildEnvironment } = process.env,
        isLocalDevelopment = buildEnvironment === 'local',
        isDeliveryEnvironment = buildEnvironment !== 'production'

    // Dev sanity check.
    album.build = 'compiled'

    actions.setWebpackConfig({
        plugins: [
            // Define global constant at compile time.
            new webpack.DefinePlugin({
                // Grab album from global env in delivery and production.
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
        }
    })
}
