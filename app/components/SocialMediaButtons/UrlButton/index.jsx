import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'
import { getUrl } from '../../../helpers/url'
import { SOCIAL_URL_BUTTON_KEY } from '../../../constants/buttons'

const UrlButton = ({ annotationIndex }) => {
    const selectedSongIndex = useSelector(mapSelectedSongIndex)

    const handleButtonClick = () => {
        navigator.clipboard.writeText(getUrl({
            songIndex: selectedSongIndex,
            annotationIndex,
            isShort: true,
        }))
    }

    return (
        <Button
            isSmallSize
            {...{
                className: cx(
                    'UrlButton',
                ),
                buttonName: SOCIAL_URL_BUTTON_KEY,
                handleButtonClick,
            }}
        />
    )
}

UrlButton.propTypes = {
    annotationIndex: PropTypes.number,
}

export default UrlButton
