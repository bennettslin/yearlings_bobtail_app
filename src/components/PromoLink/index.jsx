import React from 'react'
import { useDispatch } from 'react-redux'
import Anchor from '../Anchor'
import { toggleIsPromoShown } from '../../redux/toggle/action'
import './style'

const PromoLink = () => {
    const dispatch = useDispatch()

    const handleAnchorClick = () => {
        dispatch(toggleIsPromoShown())
    }

    return (
        <div {...{ className: 'PromoLink' }}>
            {`Interested in working with us? Visit our `}
            <Anchor
                neverDeselects
                {...{
                    text: 'promo homepage',
                    analyticsLabel: 'promo',
                    handleAnchorClick,
                }}
            />
            {`!`}
        </div>
    )
}

export default PromoLink
