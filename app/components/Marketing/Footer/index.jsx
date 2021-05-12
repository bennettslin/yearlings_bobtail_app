// Section for marketing navigation.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getIsArtupPage, getIsPromoHomepage } from '../../../helpers/marketing'
import getMarketingServerClientHoc from '../../../hocs/MarketingHoc'
import ArtupPagination from '../../Marketings/Artup/Pagination'
import HomepageButton from './HomepageButton'
import './style'

const MarketingFooter = ({ serverClientPromoPath }) => {
    // Promo homepage doesn't need footer.
    if (getIsPromoHomepage(serverClientPromoPath)) {
        return null
    }

    return (
        <div
            {...{
                className: cx(
                    'MarketingFooter',
                    'marketing__child',
                    'fCC',
                ),
            }}
        >
            <HomepageButton />
            {getIsArtupPage(serverClientPromoPath) && (
                <ArtupPagination />
            )}
        </div>
    )
}

MarketingFooter.propTypes = {
    serverClientPromoPath: PropTypes.string.isRequired,
}

export default getMarketingServerClientHoc(MarketingFooter)
