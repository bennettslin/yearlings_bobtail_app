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
import { mapIsPromoShown } from '../../redux/toggle/selector'
import { copyUrlToClipboard } from './helper'

const CopyUrlDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        copiedUrlRef = useRef(),
        isPromoShown = useSelector(mapIsPromoShown),
        selectedPromoKey = useSelector(mapSelectedPromoKey),
        selectedPitchIndex = useSelector(mapSelectedPitchSlideIndex),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isCopiedUrl = useSelector(mapIsCopiedUrl),
        [copyTimeoutId, setCopyTimeoutId] = useState(-1)

    copiedUrlRef.current = isCopiedUrl

    const resetCopiedUrl = () => {
        if (copiedUrlRef.current) {
            dispatch(updateIsCopiedUrl())
        }
    }

    const copyUrl = () => {
        copyUrlToClipboard({
            isPromoShown,
            promoKey: selectedPromoKey,
            pitchIndex: selectedPitchIndex,
            songIndex: selectedSongIndex,
            annotationIndex: selectedAnnotationIndex,
        })

        clearTimeout(copyTimeoutId)
        dispatch(updateIsCopiedUrl(true))

        setCopyTimeoutId(setTimeout(
            resetCopiedUrl,
            1750,
        ))

        return true
    }

    useImperativeHandle(ref, () => ({
        copyUrl,
        // resetCopiedUrl,
    }))
    return null
})

export default CopyUrlDispatcher
