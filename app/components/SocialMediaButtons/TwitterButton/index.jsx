import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import { mapSelectedPromoKey } from '../../../redux/promo/selector'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'
import { openSocialMediaPopup } from '../helper'
import { SOCIAL_TWITTER_BUTTON_KEY } from '../../../constants/buttons'

const TwitterButton = ({ isPromoPage }) => {
    const
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedPromoKey = useSelector(mapSelectedPromoKey)

    const handleButtonClick = () => {
        openSocialMediaPopup({
            identifier: SOCIAL_TWITTER_BUTTON_KEY,
            songIndex: selectedSongIndex,
            promoKey: selectedPromoKey,
            isPromoPage,
            isShort: true,
        })
    }

    return (
        <Button
            isSmallSize
            {...{
                className: cx(
                    'TwitterButton',
                ),
                buttonName: SOCIAL_TWITTER_BUTTON_KEY,
                handleButtonClick,
            }}
        />
    )
}

TwitterButton.propTypes = {
    isPromoPage: PropTypes.bool,
}

export default TwitterButton
