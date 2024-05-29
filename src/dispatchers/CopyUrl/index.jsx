// Singleton to copy URL.
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsCopiedUrl } from '../../redux/session/action'
import {
    mapSelectedPitchSlideIndex,
    mapSelectedPromoKey,
} from '../../redux/promo/selector'
import {
    mapSelectedAnnotationIndex,
    mapSelectedSongIndex,
} from '../../redux/selected/selector'
import { mapIsCopiedUrl } from '../../redux/session/selector'
import { copyUrlToClipboard } from './helper'

const CopyUrlDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        copiedUrlRef = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        selectedPromoKey = useSelector(mapSelectedPromoKey),
        selectedPitchIndex = useSelector(mapSelectedPitchSlideIndex),
        isCopiedUrl = useSelector(mapIsCopiedUrl),
        [copyTimeoutId, setCopyTimeoutId] = useState(-1)

    copiedUrlRef.current = isCopiedUrl

    const resetCopiedUrl = () => {
        if (copiedUrlRef.current) {
            dispatch(updateIsCopiedUrl())
        }
    }

    const copyUrl = urlKey => {
        copyUrlToClipboard({
            urlKey,
            songIndex: selectedSongIndex,
            annotationIndex: selectedAnnotationIndex,
            promoKey: selectedPromoKey,
            pitchIndex: selectedPitchIndex,
        })

        clearTimeout(copyTimeoutId)
        dispatch(updateIsCopiedUrl(true))

        setCopyTimeoutId(setTimeout(
            () => resetCopiedUrl(urlKey),
            1750,
        ))
    }

    useImperativeHandle(ref, () => ({
        copyUrl,
        resetCopiedUrl,
    }))
    return null
})

export default CopyUrlDispatcher
