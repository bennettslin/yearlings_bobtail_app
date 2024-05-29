import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import CopyUrlDispatcher from '../../../dispatchers/CopyUrl'
import Button from '../../Button'
import {
    mapSelectedAnnotationIndex,
    mapSelectedSongIndex,
} from '../../../redux/selected/selector'
import { mapIsCopiedUrl } from '../../../redux/session/selector'
import { getCopyUrlButtonIdentifier } from './helper'
import { COPY_URL_KEY } from '../../../constants/access'
import { COPY_URL_BUTTON_KEY } from '../../../constants/buttons'

const CopyUrlButton = ({ id }) => {
    const
        buttonRef = useRef(),
        copiedUrlRef = useRef(),
        copyUrlDispatcher = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isCopiedUrl = useSelector(mapIsCopiedUrl),
        buttonIdentifier = getCopyUrlButtonIdentifier({
            socialMediaId: id,
            songIndex: selectedSongIndex,
            annotationIndex: selectedAnnotationIndex,
        })

    copiedUrlRef.current = isCopiedUrl

    const handleButtonClick = () => {
        copyUrlDispatcher.current.copyUrl()
    }

    const handleTooltipHide = () => {
        copyUrlDispatcher.current.resetCopiedUrl()
    }

    useEffect(() => {
        if (isCopiedUrl) {
            ReactTooltip.show(buttonRef.current)
        } else {
            ReactTooltip.hide(buttonRef.current)
        }
    }, [isCopiedUrl])

    return (
        <>
            <Button
                {...{
                    ref: buttonRef,
                    className: cx(
                        'CopyUrlButton',
                    ),
                    buttonName: COPY_URL_BUTTON_KEY,
                    accessKey: COPY_URL_KEY,
                    buttonOption: isCopiedUrl,
                    buttonIdentifier,
                    handleButtonClick,
                    handleTooltipHide,
                }}
            />
            <CopyUrlDispatcher {...{ ref: copyUrlDispatcher }} />
        </>
    )
}

CopyUrlButton.propTypes = {
    id: PropTypes.string.isRequired,
}

export default CopyUrlButton
