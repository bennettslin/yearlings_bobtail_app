import React, { forwardRef, useImperativeHandle, useRef, memo } from 'react'
import { useSelector } from 'react-redux'
import VerseDispatcher from '../Verse'
import { getVerseIndexForScene } from '../../api/album/scenes'
import { mapSelectedSongIndex } from '../../redux/selected/selector'

const SceneDispatcher = forwardRef((props, ref) => {
    const
        dispatchVerse = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex)

    const dispatchSceneIndex = (selectedSceneIndex) => {
        const selectedVerseIndex = getVerseIndexForScene(
            selectedSongIndex,
            selectedSceneIndex
        )
        dispatchVerse.current(
            `Filmstrip scene ${selectedSceneIndex} selected`,
            selectedVerseIndex
        )
    }

    useImperativeHandle(ref, () => dispatchSceneIndex)
    return (
        <VerseDispatcher {...{ ref: dispatchVerse }} />
    )
})

export default memo(SceneDispatcher)
