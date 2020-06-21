// eslint-disable-next-line object-curly-newline
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsSceneChangeDone } from '../../redux/entrance/action'
import { updateSceneStore } from '../../redux/scene/action'
import {
    mapSelectedSongIndex,
    mapSelectedSceneIndex
} from '../../redux/selected/selector'

const SceneChangeListener = () => {
    const
        dispatch = useDispatch(),
        timeoutRef = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedSceneIndex = useSelector(mapSelectedSceneIndex),
        [sceneChangeTimeoutId, setSceneChangeTimeoutId] = useState(-1)

    timeoutRef.current = { sceneChangeTimeoutId }

    const completeSceneSelect = () => {
        dispatch(updateSceneStore({
            sceneSongIndex: selectedSongIndex,
            sceneSceneIndex: selectedSceneIndex
        }))
        dispatch(updateIsSceneChangeDone(true))
    }

    useEffect(() => {
        // If song changed, begin scene transition.

        // Clear previous timeout.
        clearTimeout(timeoutRef.current.sceneChangeTimeoutId)

        // Wait for scene selection to finish.
        setSceneChangeTimeoutId(setTimeout(
            completeSceneSelect, 200
        ))
    }, [selectedSongIndex])

    useEffect(() => {
        // If scene changed, begin scene transition.

        // Clear previous timeout.
        clearTimeout(timeoutRef.current.sceneChangeTimeoutId)

        // Wait for scene selection to finish.
        setSceneChangeTimeoutId(setTimeout(
            completeSceneSelect, 200
        ))
    }, [selectedSceneIndex])

    return null
}

export default SceneChangeListener
