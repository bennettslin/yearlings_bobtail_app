import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import WikiWormholeDispatcher from '../Dispatcher'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex
} from '../../../redux/selected/selector'

const WikiWormholeListener = () => {
    const
        dispatchWikiWormhole = useRef(),
        didMount = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex)

    useEffect(() => {
        if (didMount.current) {
            dispatchWikiWormhole.current({ selectedAnnotationIndex })
        } else {
            didMount.current = true
        }
    }, [selectedSongIndex, selectedAnnotationIndex])

    return (
        <WikiWormholeDispatcher {...{ ref: dispatchWikiWormhole }} />
    )
}

export default WikiWormholeListener
