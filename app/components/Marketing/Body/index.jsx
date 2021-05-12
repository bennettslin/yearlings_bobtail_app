import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
    getIsArtupPage,
    getIsOnesheetPage,
    getIsPromoRootPath,
} from '../../../helpers/marketing'
import getMarketingServerClientHoc from '../../../hocs/MarketingHoc'
import PromoBody from '../../Marketings/Promo/Body'
import OnesheetBody from '../../Marketings/Onesheet/Body'
import ArtupBody from '../../Marketings/Artup/Body'
import './style'

const MarketingBody = forwardRef(({
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
                    'MarketingBody',
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
                    {getIsPromoRootPath(serverClientPromoPath) && (
                        <PromoBody {...{ handlePitchPageChange }} />
                    )}
                    {getIsOnesheetPage(serverClientPromoPath) && (
                        <OnesheetBody {...{ handlePitchPageChange }} />
                    )}
                    {getIsArtupPage(serverClientPromoPath) && (
                        <ArtupBody {...{ handlePitchPageChange }} />
                    )}
                </div>
            </div>
        </div>
    )
})

MarketingBody.propTypes = {
    serverClientPromoPath: PropTypes.string.isRequired,
    handlePageChange: PropTypes.func,
}

export default getMarketingServerClientHoc(MarketingBody)
