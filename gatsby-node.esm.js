import webpack from 'webpack'
import path from 'path'
import format from 'date-fns/format'
import album from './admin/data/album'
import scene from './admin/data/scene'

import {
    getIsLocalDevelopment,
    getIsStagingEnvironment
} from './app/utils/server'

export const onCreateWebpackConfig = ({ actions }) => {
    // Dev sanity check.
    album._build = 'compiled'
    scene._build = 'compiled'

    actions.setWebpackConfig({
        plugins: [
            // Define global constant at compile time.
            new webpack.DefinePlugin({
                // Grab album from global env in staging and production.
                ...!getIsLocalDevelopment() && {
                    ALBUM: JSON.stringify(album),
                    SCENE: JSON.stringify(scene)
                },
                BUILD_DATE_TIME: JSON.stringify(
                    `${format(new Date(), 'MMMM d, yyyy, h:mmaaaaa')}m`
                ),
                IS_STAGING: getIsStagingEnvironment(),
                IS_LOCAL: getIsLocalDevelopment()
            })
        ],
        resolve: {
            // Import from files without specifying extensions.
            extensions: ['.js', '.jsx', '.mp3', '.pdf', '.scss', '.svg'],
            alias: {
                // Allow admin routes only in local and staging.
                routes: getIsStagingEnvironment() ?
                    path.resolve(__dirname, './admin/routes') :
                    path.resolve(__dirname, './app/routes'),
                // Grab data from admin folder in local development.
                data: getIsLocalDevelopment() ?
                    path.resolve(__dirname, './admin/data') :
                    path.resolve(__dirname, './app/data')
            }
        }
    })
}
