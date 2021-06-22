import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import Button from '../../Button'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'
import { getSongUrl } from '../../../helpers/url'
import { SOCIAL_COPY_URL_BUTTON_KEY } from '../../../constants/buttons'
import { updateCopiedUrlKey } from '../../../redux/session/action'
import { getMapIsCopiedUrlKey } from '../../../redux/session/selector'

const CopyUrlButton = ({ annotationIndex }) => {
    const
        dispatch = useDispatch(),
        buttonRef = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        tooltipId = `${SOCIAL_COPY_URL_BUTTON_KEY}${annotationIndex}`,
        isCopiedUrl = useSelector(getMapIsCopiedUrlKey(tooltipId))

    const handleButtonClick = () => {
        navigator.clipboard.writeText(getSongUrl({
            songIndex: selectedSongIndex,
            annotationIndex,
        }))
        // TODO: Set timeout
        dispatch(updateCopiedUrlKey(tooltipId))
    }

    useEffect(() => {
        if (isCopiedUrl) {
            ReactTooltip.show(buttonRef.current)
        } else {
            ReactTooltip.hide(buttonRef.current)
        }
    }, [isCopiedUrl])

    return (
        <Button
            isSmallSize
            {...{
                ref: buttonRef,
                className: cx(
                    'CopyUrlButton',
                ),
                buttonName: SOCIAL_COPY_URL_BUTTON_KEY,
                tooltipIdentifier: annotationIndex,
                handleButtonClick,
            }}
        />
    )
}

CopyUrlButton.propTypes = {
    annotationIndex: PropTypes.number,
}

export default CopyUrlButton
