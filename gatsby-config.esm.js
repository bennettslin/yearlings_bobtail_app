import {
    getFaviconFileName,
    getIsProductionBuild,
} from './app/utils/server'
import {
    GA_ACCOUNT__STAGING,
    GA_ACCOUNT__PRODUCTION,
} from './app/constants/analytics'

export default {
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: getIsProductionBuild() ?
                    GA_ACCOUNT__PRODUCTION :
                    GA_ACCOUNT__STAGING,
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
                icon: `assets/favicon/${getFaviconFileName()}.png`,
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
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: [
                        'Rancho',
                        'PT Sans Narrow',
                        'Neuton',
                    ],
                },
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
