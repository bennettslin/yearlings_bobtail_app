import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'
import { openSocialMediaPopup } from '../helper'
import { SOCIAL_FACEBOOK_BUTTON_KEY } from '../../../constants/buttons'

const FacebookButton = ({ annotationIndex }) => {
    const selectedSongIndex = useSelector(mapSelectedSongIndex)

    const handleButtonClick = () => {
        openSocialMediaPopup({
            songIndex: selectedSongIndex,
            annotationIndex,
            identifier: SOCIAL_FACEBOOK_BUTTON_KEY,
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
    annotationIndex: PropTypes.number,
}

export default FacebookButton
