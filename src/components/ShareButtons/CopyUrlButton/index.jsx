import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import Button from '../../Button'
import { mapSelectedPitchSlideIndex, mapSelectedPromoKey } from '../../../redux/promo/selector'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'
import { updateCopiedUrlKey } from '../../../redux/session/action'
import { getMapIsCopiedUrlKey } from '../../../redux/session/selector'
import {
    copyUrlToClipboard,
    getCopyUrlButtonIdentifier,
} from './helper'
import { SOCIAL_COPY_URL_BUTTON_KEY } from '../../../constants/buttons'

const CopyUrlButton = ({ id, annotationIndex }) => {
    const
        dispatch = useDispatch(),
        buttonRef = useRef(),
        copiedUrlRef = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedPromoKey = useSelector(mapSelectedPromoKey),
        selectedPitchIndex = useSelector(mapSelectedPitchSlideIndex),
        buttonIdentifier = getCopyUrlButtonIdentifier({
            socialMediaId: id,
            songIndex: selectedSongIndex,
            annotationIndex,
        }),
        tooltipId = `${SOCIAL_COPY_URL_BUTTON_KEY}${Number.isFinite(buttonIdentifier) ? buttonIdentifier : ''}`,
        isCopiedUrl = useSelector(getMapIsCopiedUrlKey(tooltipId)),
        [copyTimeoutId, setCopyTimeoutId] = useState(-1)

    copiedUrlRef.current = isCopiedUrl

    const resetCopiedUrlKey = () => {
        if (copiedUrlRef.current) {
            dispatch(updateCopiedUrlKey())
        }
    }

    const handleButtonClick = () => {
        copyUrlToClipboard({
            socialMediaId: id,
            songIndex: selectedSongIndex,
            annotationIndex,
            promoKey: selectedPromoKey,
            pitchIndex: selectedPitchIndex,
        })

        clearTimeout(copyTimeoutId)
        dispatch(updateCopiedUrlKey(tooltipId))

        setCopyTimeoutId(setTimeout(
            resetCopiedUrlKey,
            1500,
        ))
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
            {...{
                ref: buttonRef,
                className: cx(
                    'CopyUrlButton',
                ),
                buttonName: SOCIAL_COPY_URL_BUTTON_KEY,
                buttonOption: isCopiedUrl,
                buttonIdentifier,
                handleButtonClick,
                handleTooltipHide: resetCopiedUrlKey,
                // isSmallSize: Boolean(annotationIndex),
            }}
        />
    )
}

CopyUrlButton.propTypes = {
    id: PropTypes.string.isRequired,
    annotationIndex: PropTypes.number,
}

export default CopyUrlButton
