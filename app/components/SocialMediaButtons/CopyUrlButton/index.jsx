import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Button'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'
import { getSongUrl } from '../../../helpers/url'
import { SOCIAL_COPY_URL_BUTTON_KEY } from '../../../constants/buttons'

const CopyUrlButton = ({ annotationIndex }) => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex)

    const handleButtonClick = () => {
        navigator.clipboard.writeText(getSongUrl({
            songIndex: selectedSongIndex,
            annotationIndex,
        }))
    }

    return (
        <Button
            isSmallSize
            {...{
                className: cx(
                    'CopyUrlButton',
                ),
                buttonName: SOCIAL_COPY_URL_BUTTON_KEY,
                handleButtonClick,
            }}
        />
    )
}

CopyUrlButton.propTypes = {
    annotationIndex: PropTypes.number,
}

export default CopyUrlButton
