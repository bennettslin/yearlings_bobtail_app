import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import Button from '../../Button'
import { mapSelectedPromoKey } from '../../../redux/promo/selector'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'
import { updateCopiedUrlKey } from '../../../redux/session/action'
import { getMapIsCopiedUrlKey } from '../../../redux/session/selector'
import { SOCIAL_COPY_URL_BUTTON_KEY } from '../../../constants/buttons'
import { copyUrlToClipboard } from './helper'

const CopyUrlButton = ({ annotationIndex, isPromoPage }) => {
    const
        dispatch = useDispatch(),
        buttonRef = useRef(),
        copiedUrlRef = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedPromoKey = useSelector(mapSelectedPromoKey),
        tooltipId = `${SOCIAL_COPY_URL_BUTTON_KEY}${Number.isFinite(annotationIndex) ? annotationIndex : ''}`,
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
            songIndex: selectedSongIndex,
            annotationIndex,
            promoKey: selectedPromoKey,
            isPromoPage,
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
            isSmallSize
            {...{
                ref: buttonRef,
                className: cx(
                    'CopyUrlButton',
                ),
                buttonName: SOCIAL_COPY_URL_BUTTON_KEY,
                buttonIdentifier: isCopiedUrl,
                tooltipIdentifier: annotationIndex,
                handleButtonClick,
                handleTooltipHide: resetCopiedUrlKey,
            }}
        />
    )
}

CopyUrlButton.propTypes = {
    annotationIndex: PropTypes.number,
    isPromoPage: PropTypes.bool,
}

export default CopyUrlButton
