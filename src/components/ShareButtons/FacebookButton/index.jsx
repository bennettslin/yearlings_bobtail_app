import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import { mapSelectedPitchSlideIndex, mapSelectedPromoKey } from '../../../redux/promo/selector'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'
import { openSocialMediaPopup } from '../../../utils/socialMedia'
import { SOCIAL_FACEBOOK_BUTTON_KEY } from '../../../constants/buttons'
import { PROMO_PAGE_SOCIAL_MEDIA } from '../../../constants/socialMedia'

const FacebookButton = ({ id }) => {
    const
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedPromoKey = useSelector(mapSelectedPromoKey),
        selectedPitchIndex = useSelector(mapSelectedPitchSlideIndex)

    const handleButtonClick = () => {
        openSocialMediaPopup({
            socialMediaId: id,
            brandId: SOCIAL_FACEBOOK_BUTTON_KEY,
            songIndex: selectedSongIndex,
            promoKey: selectedPromoKey,
            pitchIndex: selectedPitchIndex,
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
                buttonIdentifier:
                    id !== PROMO_PAGE_SOCIAL_MEDIA &&
                        selectedSongIndex,
                handleButtonClick,
            }}
        />
    )
}

FacebookButton.propTypes = {
    id: PropTypes.string.isRequired,
}

export default FacebookButton
