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
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex)

    useEffect(() => {
        dispatchWikiWormhole.current({ selectedAnnotationIndex })
    }, [selectedSongIndex, selectedAnnotationIndex])

    return (
        <WikiWormholeDispatcher {...{ ref: dispatchWikiWormhole }} />
    )
}

export default WikiWormholeListener
