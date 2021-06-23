import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import { mapSelectedPromoKey } from '../../../redux/promo/selector'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'
import { openSocialMediaPopup } from '../helper'
import { SOCIAL_FACEBOOK_BUTTON_KEY } from '../../../constants/buttons'

const FacebookButton = ({ isPromoPage }) => {
    const
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedPromoKey = useSelector(mapSelectedPromoKey)

    const handleButtonClick = () => {
        openSocialMediaPopup({
            identifier: SOCIAL_FACEBOOK_BUTTON_KEY,
            songIndex: selectedSongIndex,
            promoKey: selectedPromoKey,
            isPromoPage,
        })
    }

    return (
        <Button
            isSmallSize
            {...{
                className: cx(
                    'FacebookButton',
                ),
                buttonName: SOCIAL_FACEBOOK_BUTTON_KEY,
                handleButtonClick,
            }}
        />
    )
}

FacebookButton.propTypes = {
    isPromoPage: PropTypes.bool,
}

export default FacebookButton
