import webpack from 'webpack'
import path from 'path'
import scene from './admin/data/scene'
import album from './admin/data/album'
import promo from './admin/data/promo'
import {
    getIsRuntimeBuild,
    getIsProductionBuild,
} from './src/utils/server'
import { COMPILED } from './src/constants/server'

import albumPages from './src/utils/gatsby/pages/album'
import promoPages from './src/utils/gatsby/pages/promo'

export const onCreateWebpackConfig = ({ actions }) => {
    // Dev sanity check.
    scene._build = COMPILED
    album._build = COMPILED
    promo._build = COMPILED

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
                    PROMO: JSON.stringify(promo),
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
                    path.resolve(__dirname, './src/data'),
            },
        },
    })
}

export const createPages = ({ actions }) => {
    albumPages.forEach(page => {
        actions.createPage({
            ...page,
            component: require.resolve('./src/containers/AlbumPage/index.jsx'),
        })
    })

    promoPages.forEach(page => {
        actions.createPage({
            ...page,
            component: require.resolve('./src/containers/PromoPage/index.jsx'),
        })
    })
}
