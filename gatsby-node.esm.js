import webpack from 'webpack'
import path from 'path'
import scene from './admin/data/scene'
import album from './admin/data/album'
import artup from './admin/data/artup'
import {
    getIsRuntimeBuild,
    getIsProductionBuild,
} from './app/utils/server'
import { COMPILED } from './app/constants/server'

export const onCreateWebpackConfig = ({ actions }) => {
    // Dev sanity check.
    scene._build = COMPILED
    album._build = COMPILED
    artup._build = COMPILED

    // Get primitive value of current date and time.
    const buildDateTime = new Date().valueOf()

    actions.setWebpackConfig({
        plugins: [
            // Define global constant at compile time.
            new webpack.DefinePlugin({
                // Grab from global data in compiled builds.
                ...!getIsRuntimeBuild() && {
                    SCENE: JSON.stringify(scene),
                    ALBUM: JSON.stringify(album),
                    ARTUP: JSON.stringify(artup),
                },
                BUILD_DATE_TIME: buildDateTime,
                IS_RUNTIME: getIsRuntimeBuild(),
                IS_PRODUCTION: getIsProductionBuild(),
            }),
        ],
        resolve: {
            // Import from files without specifying extensions.
            extensions: ['.js', '.jsx', '.mp3', '.pdf', '.scss', '.svg'],
            alias: {
                // Grab data from admin folder in runtime builds.
                data: getIsRuntimeBuild() ?
                    path.resolve(__dirname, './admin/data') :
                    path.resolve(__dirname, './app/data'),
            },
        },
    })
}
