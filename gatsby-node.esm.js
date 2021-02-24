import webpack from 'webpack'
import path from 'path'
import scene from './admin/data/scene'
import album from './admin/data/album'
import pitch from './admin/data/pitch'

import {
    getIsLocalDevelopment,
    getIsStagingEnvironment,
} from './app/utils/node'

export const onCreateWebpackConfig = ({ actions }) => {
    // Dev sanity check.
    scene._build = 'compiled'
    album._build = 'compiled'
    pitch._build = 'compiled'

    // Get primitive value of current date and time.
    const buildDateTime = new Date().valueOf()

    actions.setWebpackConfig({
        plugins: [
            // Define global constant at compile time.
            new webpack.DefinePlugin({
                // Grab album from global env in staging and production.
                ...!getIsLocalDevelopment() && {
                    SCENE: JSON.stringify(scene),
                    ALBUM: JSON.stringify(album),
                    PITCH: JSON.stringify(pitch),
                },
                BUILD_DATE_TIME: buildDateTime,
                IS_LOCAL: getIsLocalDevelopment(),
                IS_STAGING: getIsStagingEnvironment(),
            }),
        ],
        resolve: {
            // Import from files without specifying extensions.
            extensions: ['.js', '.jsx', '.mp3', '.pdf', '.scss', '.svg'],
            alias: {
                // Grab data from admin folder in local development.
                data: getIsLocalDevelopment() ?
                    path.resolve(__dirname, './admin/data') :
                    path.resolve(__dirname, './app/data'),
            },
        },
    })
}
