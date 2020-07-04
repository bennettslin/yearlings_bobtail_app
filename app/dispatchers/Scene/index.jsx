import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VerseDispatcher from '../Verse'
import { getVerseIndexForScene } from '../../api/album/scenes'
import { scrollLyricForVerseSelect } from '../../redux/scrollLyric/action'
import { mapSelectedSongIndex } from '../../redux/selected/selector'

const SceneDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dispatchVerse = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex)

    const dispatchSceneIndex = (selectedSceneIndex) => {
        const selectedVerseIndex = getVerseIndexForScene(
            selectedSongIndex,
            selectedSceneIndex
        )
        dispatchVerse.current(selectedVerseIndex)
        dispatch(scrollLyricForVerseSelect(
            `Filmstrip scene ${selectedSceneIndex} selected`,
            selectedVerseIndex
        ))
    }

    useImperativeHandle(ref, () => dispatchSceneIndex)
    return (
        <VerseDispatcher {...{ ref: dispatchVerse }} />
    )
})

export default SceneDispatcher
