import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getIsArtupPage } from '../../../helpers/marketing'
import getMarketingServerClientHoc from '../../../hocs/MarketingHoc'
import ArtupScroll from '../../Marketings/Artup/Scroll'
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
                    {getIsArtupPage(serverClientPromoPath) && (
                        <ArtupScroll {...{ handlePitchPageChange }} />
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
