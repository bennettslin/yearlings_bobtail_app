import { getIsStagingEnvironment } from './app/utils/node'
import {
    GA_ACCOUNT__STAGING,
    GA_ACCOUNT__PRODUCTION
} from './app/constants/analytics'

export default {
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Yearling's Bobtail`,
                short_name: `Yearling's Bobtail`,
                description: 'Audio webcomic by Bobtail Yearlings',
                start_url: '/',
                // TODO: With access to Illustrator again.
                background_color: '#fff',
                theme_color: '#fff',
                display: 'standalone',
                icon: 'assets/favicon/yearlingsBobtail.png'
            }
        },
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: [
                        'Rancho',
                        'PT Sans Narrow',
                        'Neuton'
                    ]
                }
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: getIsStagingEnvironment() ?
                    GA_ACCOUNT__STAGING :
                    GA_ACCOUNT__PRODUCTION
            }
        }
    ]
}
