// Section for marketing navigation.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getIsArtupPage, getIsOnesheetPage } from '../../../helpers/marketing'
import getMarketingServerClientHoc from '../../../hocs/MarketingHoc'
import ArtupFooter from '../../Marketings/Artup/Footer'
import OnesheetFooter from '../../Marketings/Onesheet/Footer'
import './style'

const MarketingFooter = ({ serverClientPromoPath }) => {
    let renderedNav = null

    if (getIsArtupPage(serverClientPromoPath)) {
        renderedNav = <ArtupFooter />
    }

    if (getIsOnesheetPage(serverClientPromoPath)) {
        renderedNav = <OnesheetFooter />
    }

    return renderedNav && (
        <div
            {...{
                className: cx(
                    'MarketingFooter',
                    'fCC',
                ),
            }}
        >
            {renderedNav}
        </div>
    )
}

MarketingFooter.propTypes = {
    serverClientPromoPath: PropTypes.string.isRequired,
}

export default getMarketingServerClientHoc(MarketingFooter)
