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
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: ['PT Sans Narrow', 'Rancho', 'Neuton']
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
