import React from 'react'
import { useDispatch } from 'react-redux'
import Anchor from '../Anchor'
import { toggleIsPromoShown } from '../../redux/toggle/action'
import './style'

const PromoAnchor = () => {
    const dispatch = useDispatch()

    const handleAnchorClick = () => {
        dispatch(toggleIsPromoShown())
    }

    return (
        <div {...{ className: 'PromoAnchor' }}>
            {`Interested in working with us? Visit our `}
            <Anchor
                {...{
                    text: 'promo homepage!',
                    analyticsLabel: 'promo',
                    handleAnchorClick,
                }}
            />
        </div>
    )
}

export default PromoAnchor
