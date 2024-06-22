import React from 'react'
import PropTypes from 'prop-types'
import Anchor from '../../../Anchor'
import { useDispatch } from 'react-redux'
import { updatePromo } from '../../../../redux/promo/action'
import { PITCH_KEYS } from '../../../../constants/routing'

const PromoLinkAnchor = ({
    text,
    promoKey,

}) => {
    const dispatch = useDispatch()

    const handleAnchorClick = () => {
        dispatch(updatePromo({
            selectedPromoKey: promoKey,
            ...PITCH_KEYS.includes(promoKey) && {
                pitchSlideIndex: 1,
            },
        }))
    }

    return (
        <Anchor
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
