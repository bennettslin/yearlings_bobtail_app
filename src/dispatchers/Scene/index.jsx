import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useSelector } from 'react-redux'
import VerseDispatcher from '../Verse'
import { getVerseIndexForScene } from '../../endpoint/album/scenes'
import { mapSelectedSongIndex } from '../../redux/selected/selector'

const SceneDispatcher = forwardRef((props, ref) => {
    const
        dispatchVerse = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex)

    const dispatchSceneIndex = (selectedSceneIndex) => {
        dispatchVerse.current({
            scrollLog: `Filmstrip scene ${selectedSceneIndex} selected`,
            verseIndex: getVerseIndexForScene(
                selectedSongIndex,
                selectedSceneIndex,
            ),
        })
    }

    useImperativeHandle(ref, () => dispatchSceneIndex)
    return (
        <VerseDispatcher {...{ ref: dispatchVerse }} />
    )
})

export default SceneDispatcher
