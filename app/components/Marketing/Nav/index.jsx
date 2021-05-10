// Section for marketing navigation.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getIsArtupPage } from '../../../helpers/marketing'
import getMarketingServerClientHoc from '../../../hocs/MarketingHoc'
import ArtupNav from '../../Marketings/Artup/Nav'
import './style'

const MarketingNav = ({ serverClientPromoPath }) => {
    return (
        <div
            {...{
                className: cx(
                    'MarketingNav',
                    'fCC',
                ),
            }}
        >
            {getIsArtupPage(serverClientPromoPath) && (
                <ArtupNav />
            )}
        </div>
    )
}

MarketingNav.propTypes = {
    serverClientPromoPath: PropTypes.string.isRequired,
}

export default getMarketingServerClientHoc(MarketingNav)
