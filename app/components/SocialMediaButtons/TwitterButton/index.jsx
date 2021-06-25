import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import { mapSelectedPromoKey } from '../../../redux/promo/selector'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'
import { openSocialMediaPopup } from '../helper'
import { SOCIAL_TWITTER_BUTTON_KEY } from '../../../constants/buttons'
import { PROMO_PAGE_SOCIAL_MEDIA } from '../../../constants/socialMedia'

const TwitterButton = ({ id }) => {
    const
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedPromoKey = useSelector(mapSelectedPromoKey)

    const handleButtonClick = () => {
        openSocialMediaPopup({
            socialMediaId: id,
            brandId: SOCIAL_TWITTER_BUTTON_KEY,
            songIndex: selectedSongIndex,
            promoKey: selectedPromoKey,
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
                buttonIdentifier:
                    id !== PROMO_PAGE_SOCIAL_MEDIA &&
                        selectedSongIndex,
                handleButtonClick,
            }}
        />
    )
}

TwitterButton.propTypes = {
    id: PropTypes.string.isRequired,
}

export default TwitterButton
