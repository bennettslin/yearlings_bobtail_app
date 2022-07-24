import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import PitchPromo from '../../Promos/Pitch'
import SinglePagePromo from '../../Promos/SinglePage'
import PromoScrollTitle from './Title'
import { getTitleForPromo } from '../../../endpoint/promo'
import { getIsPitchPage } from '../../../helpers/promo'
import './style'

const PromoScroll = forwardRef(({
    serverClientPromoKey,
    handlePageChange = () => {},

}, ref) => {
    const handlePromoPageChange = () => {
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
                    'PromoScroll',
                    'promo__child',
                    'fCC',
                ),
            }}
        >
            <div
                {...{
                    className: cx(
                        // Box shadow and gradient mask can't be on same element.
                        'PromoScroll__child',
                        'abF',
                        'ovH', // Rounds scrollbar.
                    ),
                }}
            >
                <div
                    {...{
                        ref,
                        className: cx(
                            'PromoScroll__grandchild',
                            'gradientMask__scroll',
                            'foN',
                        ),
                        tabIndex: -1,
                    }}
                >
                    <PromoScrollTitle
                        {...{
                            title: getTitleForPromo(serverClientPromoKey),
                        }}
                    />
                    {getIsPitchPage(serverClientPromoKey) ? (
                        <PitchPromo {...{ handlePromoPageChange }} />
                    ) : (
                        <SinglePagePromo
                            {...{
                                promoKey: serverClientPromoKey,
                                handlePromoPageChange,
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
})

PromoScroll.propTypes = {
    serverClientPromoKey: PropTypes.string.isRequired,
    handlePageChange: PropTypes.func,
}

export default getPromoServerClientHoc(PromoScroll)
