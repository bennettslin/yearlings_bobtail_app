import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getShowArtupPage } from '../../../helpers/marketing'
import getMarketingServerClientHoc from '../../../hocs/MarketingHoc'
import PitchScroll from '../../Pitch/Scroll'
import './style'

const MarketingScroll = forwardRef(({
    serverClientPromoPath,

}, ref) => {
    const resetScrollTop = () => {
        if (ref) {
            // Allow child to scroll back to top.
            ref.current.scrollTop = 0
        }
    }

    return (
        <div
            {...{
                className: cx(
                    'MarketingScroll',
                    'fCC',
                ),
            }}
        >
            <div
                {...{
                    className: cx(
                        // Box shadow and gradient mask cannot be on same element.
                        'MarketingScroll__child',
                        'abF',
                    ),
                }}
            >
                <div
                    {...{
                        ref,
                        className: cx(
                            'MarketingScroll__grandchild',
                            'foN',
                            'gradientMask__scrollBottom',
                        ),
                        tabIndex: -1,
                    }}
                >
                    {getShowArtupPage(serverClientPromoPath) && (
                        <PitchScroll {...{ resetScrollTop }} />
                    )}
                </div>
            </div>
        </div>
    )
})

MarketingScroll.propTypes = {
    serverClientPromoPath: PropTypes.string.isRequired,
}

export default getMarketingServerClientHoc(MarketingScroll)
