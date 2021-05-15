import React from 'react'
import PropTypes from 'prop-types'
import Anchor from '../../../Anchor'
import { useDispatch } from 'react-redux'
import { setSelectedPromoKey } from '../../../../redux/promo/action'

const PromoAnchor = ({
    text,
    promoKey,

}) => {
    const dispatch = useDispatch()

    const handleAnchorClick = () => {
        dispatch(setSelectedPromoKey(promoKey))
    }

    return (
        <Anchor
            {...{
                text,
                promoKey,
                analyticsLabel: promoKey,
                handleAnchorClick,
            }}
        />
    )
}

PromoAnchor.propTypes = {
    text: PropTypes.string.isRequired,
    promoKey: PropTypes.string.isRequired,
}

export default PromoAnchor
