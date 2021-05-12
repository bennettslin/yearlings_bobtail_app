// Section for marketing navigation.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getIsArtupPage, getIsPromoRootPath } from '../../../helpers/marketing'
import getMarketingServerClientHoc from '../../../hocs/MarketingHoc'
import ArtupPagination from '../../Marketings/Artup/Pagination'
import PromoPageButton from './PromoPageButton'
import './style'

const MarketingFooter = ({ serverClientPromoPath }) => {
    // Promo root page doesn't need footer.
    if (getIsPromoRootPath(serverClientPromoPath)) {
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
            <PromoPageButton />
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
