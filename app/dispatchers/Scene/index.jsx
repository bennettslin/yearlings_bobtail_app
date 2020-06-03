// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useSelector } from 'react-redux'
import VerseDispatcher from '../VerseDispatcher'
import { getVerseIndexForScene } from '../../api/album/scenes'
import { mapSelectedSongIndex } from '../../redux/selected/selectors'

const SceneDispatcher = forwardRef((props, ref) => {
    const
        dispatchVerse = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex)

    const dispatchSceneIndex = (selectedSceneIndex) => {
        const selectedVerseIndex = getVerseIndexForScene(
            selectedSongIndex,
            selectedSceneIndex
        )

        dispatchVerse.current({
            selectedVerseIndex,
            scrollLog: `Select scene ${selectedSceneIndex}, verse ${selectedVerseIndex}.`
        })
    }

    useImperativeHandle(ref, () => dispatchSceneIndex)
    return (
        <VerseDispatcher {...{ ref: dispatchVerse }} />
    )
})

export default SceneDispatcher
