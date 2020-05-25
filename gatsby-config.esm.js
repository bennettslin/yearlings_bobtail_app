import { getIsDeliveryEnvironment } from './app/utils/server'
import {
    GA_ACCOUNT__DELIVERY,
    GA_ACCOUNT__PRODUCTION
} from './app/constants/analytics'

export default {
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['PT Sans Narrow', 'Rancho', 'Neuton']
                }
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: getIsDeliveryEnvironment() ?
                    GA_ACCOUNT__DELIVERY :
                    GA_ACCOUNT__PRODUCTION
            }
        }
    ]
}
