import React, { useEffect, useRef, memo } from 'react'
import { useSelector } from 'react-redux'
import WikiWormholeDispatcher from '../Dispatcher'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex
} from '../../../redux/selected/selector'

const WikiWormholeListener = () => {
    const
        dispatchWikiWormhole = useRef(),
        didMountRef = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex)

    useEffect(() => {
        if (didMountRef.current) {
            dispatchWikiWormhole.current({ selectedAnnotationIndex })
        } else {
            didMountRef.current = true
        }
    }, [selectedSongIndex, selectedAnnotationIndex])

    return (
        <WikiWormholeDispatcher {...{ ref: dispatchWikiWormhole }} />
    )
}

export default memo(WikiWormholeListener)
