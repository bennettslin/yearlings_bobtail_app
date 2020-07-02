import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVerseIndexForScene } from '../../api/album/scenes'
import { scrollLyricToVerseInCallback } from '../../redux/scrollLyric/action'
import { mapSelectedSongIndex } from '../../redux/selected/selector'

const SceneDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex)

    const dispatchSceneIndex = (selectedSceneIndex) => {
        const selectedVerseIndex = getVerseIndexForScene(
            selectedSongIndex,
            selectedSceneIndex
        )
        dispatch(scrollLyricToVerseInCallback(
            `Filmstrip scene ${selectedSceneIndex} selected`,
            selectedVerseIndex
        ))
    }

    useImperativeHandle(ref, () => dispatchSceneIndex)
    return null
})

export default SceneDispatcher
