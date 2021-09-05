import {
    APP_DESCRIPTION,
    APP_TITLE,
    getFaviconFileName,
    getIsProductionBuild,
    getS3BucketName,
} from './src/utils/server'
import { GA_ACCOUNT } from './src/constants/analytics'

export default {
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    GA_ACCOUNT,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: APP_TITLE,
                short_name: APP_TITLE,
                description: APP_DESCRIPTION,
                start_url: '/',
                background_color: '#8c4848',
                theme_color: '#c9c2a5',
                display: 'standalone',
                icon: `src/assets/favicon/${getFaviconFileName()}.png`,
            },
        },
        ...getIsProductionBuild() ?
            [] :
            [
                {
                    // Include admin pages if not production build.
                    resolve: `gatsby-plugin-page-creator`,
                    options: {
                        path: `${__dirname}/admin/pages`,
                    },
                },
            ],
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {},
        },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: getS3BucketName(),
            },
        },
        {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                // analyzerPort: 8888,
                openAnalyzer: false,
            },
        },
    ],
}
