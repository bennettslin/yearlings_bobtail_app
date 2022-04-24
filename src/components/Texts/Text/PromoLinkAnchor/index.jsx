import React from 'react'
import PropTypes from 'prop-types'
import Anchor from '../../../Anchor'
import { useDispatch } from 'react-redux'
import { updatePromo } from '../../../../redux/promo/action'

const PromoLinkAnchor = ({
    text,
    promoKey,

}) => {
    const dispatch = useDispatch()

    const handleAnchorClick = () => {
        dispatch(updatePromo({ selectedPromoKey: promoKey }))
    }

    return (
        <Anchor
            alwaysPointer
            {...{
                text,
                analyticsLabel: promoKey,
                handleAnchorClick,
            }}
        />
    )
}

PromoLinkAnchor.propTypes = {
    text: PropTypes.any.isRequired,
    promoKey: PropTypes.string.isRequired,
}

export default PromoLinkAnchor
