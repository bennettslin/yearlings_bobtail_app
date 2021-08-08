import {
    getFaviconFileName,
    getIsProductionBuild,
    getS3BucketName,
} from './app/utils/server'
import { GA_ACCOUNT } from './app/constants/analytics'

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
                name: `Yearling's Bobtail`,
                short_name: `Yearling's Bobtail`,
                description: 'Audio webcomic by Bobtail Yearlings',
                start_url: '/',
                background_color: '#8c4848',
                theme_color: '#c9c2a5',
                display: 'standalone',
                icon: `app/assets/favicon/${getFaviconFileName()}.png`,
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
        {
            // Always include app pages.
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/app/pages`,
            },
        },
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: getS3BucketName(),
            },
        },
        {
            resolve: `gatsby-plugin-webpack-bundle-analyzer`,
            options: {
                analyzerPort: 1114,
                openAnalyzer: false,
            },
        },
    ],
}
