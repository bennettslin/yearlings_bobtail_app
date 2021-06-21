import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'
import { openSocialMediaPopup } from '../helper'
import { SOCIAL_TWITTER_BUTTON_KEY } from '../../../constants/buttons'

const TwitterButton = ({ annotationIndex }) => {
    const selectedSongIndex = useSelector(mapSelectedSongIndex)

    const handleButtonClick = () => {
        openSocialMediaPopup({
            songIndex: selectedSongIndex,
            annotationIndex,
            buttonKey: SOCIAL_TWITTER_BUTTON_KEY,
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
    annotationIndex: PropTypes.number,
}

export default TwitterButton
