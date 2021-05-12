import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
    getIsArtupPage,
    getIsOnesheetPage,
    getIsPromoHomepage,
} from '../../../helpers/marketing'
import getMarketingServerClientHoc from '../../../hocs/MarketingHoc'
import PromoMarketing from '../../Marketings/Promo'
import OnesheetMarketing from '../../Marketings/Onesheet'
import ArtupMarketing from '../../Marketings/Artup'
import './style'

const MarketingScroll = forwardRef(({
    serverClientPromoPath,
    handlePageChange = () => {},

}, ref) => {
    const handlePitchPageChange = () => {
        if (ref) {
            // Allow child to scroll back to top.
            ref.current.scrollTop = 0
            handlePageChange()
        }
    }

    return (
        <div
            {...{
                className: cx(
                    'MarketingScroll',
                    'marketing__child',
                    'fCC',
                ),
            }}
        >
            <div
                {...{
                    className: cx(
                        // Box shadow and gradient mask can't be on same element.
                        'MarketingScroll__child',
                        'abF',
                        'ovH', // Rounds scrollbar.
                    ),
                }}
            >
                <div
                    {...{
                        ref,
                        className: cx(
                            'MarketingScroll__grandchild',
                            'gradientMask__scrollBottom',
                            'foN',
                        ),
                        tabIndex: -1,
                    }}
                >
                    {getIsPromoHomepage(serverClientPromoPath) && (
                        <PromoMarketing {...{ handlePitchPageChange }} />
                    )}
                    {getIsOnesheetPage(serverClientPromoPath) && (
                        <OnesheetMarketing {...{ handlePitchPageChange }} />
                    )}
                    {getIsArtupPage(serverClientPromoPath) && (
                        <ArtupMarketing {...{ handlePitchPageChange }} />
                    )}
                </div>
            </div>
        </div>
    )
})

MarketingScroll.propTypes = {
    serverClientPromoPath: PropTypes.string.isRequired,
    handlePageChange: PropTypes.func,
}

export default getMarketingServerClientHoc(MarketingScroll)
