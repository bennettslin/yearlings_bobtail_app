// eslint-disable-next-line object-curly-newline
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsSceneChangeDone } from '../../redux/entrance/action'
import { updateSceneStore } from '../../redux/scene/action'
import {
    mapIsSongChangeDone,
    mapIsSceneChangeDone
} from '../../redux/entrance/selector'
import {
    mapSelectedSongIndex,
    mapSelectedSceneIndex
} from '../../redux/selected/selector'

const SceneChangeListener = () => {
    const
        dispatch = useDispatch(),
        timeoutRef = useRef(),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        isSceneChangeDone = useSelector(mapIsSceneChangeDone),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedSceneIndex = useSelector(mapSelectedSceneIndex),
        [sceneChangeTimeoutId, setSceneChangeTimeoutId] = useState(-1)

    timeoutRef.current = { sceneChangeTimeoutId }

    const completeSceneSelect = () => {
        dispatch(updateIsSceneChangeDone(true))
    }

    useEffect(() => {
        // Only handle scene change here if it's within the same song.
        if (isSongChangeDone) {
            // Begin scene change transition.
            dispatch(updateIsSceneChangeDone())

            // Clear previous timeout.
            clearTimeout(timeoutRef.current.sceneChangeTimeoutId)

            // Wait for scene selection to finish.
            setSceneChangeTimeoutId(setTimeout(
                completeSceneSelect, 200
            ))
        }
    }, [selectedSceneIndex])

    useEffect(() => {
        // Finish song change transition.
        if (isSongChangeDone && isSceneChangeDone) {
            dispatch(updateSceneStore({
                sceneSongIndex: selectedSongIndex,
                sceneSceneIndex: selectedSceneIndex
            }))
        }
    }, [isSceneChangeDone])

    return null
}

export default SceneChangeListener
