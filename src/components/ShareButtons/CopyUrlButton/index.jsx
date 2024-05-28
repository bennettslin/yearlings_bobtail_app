import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import CopyUrlDispatcher from '../../../dispatchers/CopyUrl'
import Button from '../../Button'
import { mapSelectedAnnotationIndex, mapSelectedSongIndex } from '../../../redux/selected/selector'
import { getMapIsCopiedUrlKey } from '../../../redux/session/selector'
import { getCopyUrlButtonIdentifier } from './helper'
import { COPY_URL_KEY } from '../../../constants/access'
import { SOCIAL_COPY_URL_BUTTON_KEY } from '../../../constants/buttons'

const CopyUrlButton = ({ id }) => {
    const
        buttonRef = useRef(),
        copiedUrlRef = useRef(),
        copyUrlDispatcher = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        buttonIdentifier = getCopyUrlButtonIdentifier({
            socialMediaId: id,
            songIndex: selectedSongIndex,
            annotationIndex: selectedAnnotationIndex,
        }),
        urlKey = `${SOCIAL_COPY_URL_BUTTON_KEY}${buttonIdentifier || ''}`,
        isCopiedUrl = useSelector(getMapIsCopiedUrlKey(urlKey))

    copiedUrlRef.current = isCopiedUrl

    const handleButtonClick = () => {
        copyUrlDispatcher.current.copyUrl(urlKey)
    }

    const handleTooltipHide = () => {
        copyUrlDispatcher.current.resetCopiedUrl(urlKey)
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
                    buttonName: SOCIAL_COPY_URL_BUTTON_KEY,
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
