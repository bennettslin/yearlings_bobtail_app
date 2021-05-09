// Section for marketing navigation.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getIsArtupPage } from '../../../helpers/marketing'
import getMarketingServerClientHoc from '../../../hocs/MarketingHoc'
import PitchNav from '../../Pitch/Nav'
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
                <PitchNav />
            )}
        </div>
    )
}

MarketingNav.propTypes = {
    serverClientPromoPath: PropTypes.string.isRequired,
}

export default getMarketingServerClientHoc(MarketingNav)
