import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    resetSceneChange,
    updateEntranceStore,
} from '../../redux/entrance/action'
import { updateSceneStore } from '../../redux/scene/action'
import {
    mapIsSongChangeDone,
    mapIsSceneChangeDone,
} from '../../redux/entrance/selector'
import {
    mapSceneSongIndex,
    mapSceneSceneIndex,
} from '../../redux/scene/selector'
import {
    mapSelectedSongIndex,
    mapSelectedSceneIndex,
} from '../../redux/selected/selector'

const SceneChangeManager = () => {
    const
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        isSceneChangeDone = useSelector(mapIsSceneChangeDone),
        sceneSongIndex = useSelector(mapSceneSongIndex),
        sceneSceneIndex = useSelector(mapSceneSceneIndex),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedSceneIndex = useSelector(mapSelectedSceneIndex),
        [didMount, setDidMount] = useState(false)

    useEffect(() => {
        if (didMount) {
            // Scene changed, so begin transition if not already in place.
            if (isSongChangeDone && isSceneChangeDone) {
                dispatch(resetSceneChange())
            }
        } else {
            setDidMount(true)
        }
    }, [selectedSongIndex, selectedSceneIndex])

    useEffect(() => {
        if (didMount) {
            if (isSongChangeDone && isSceneChangeDone) {
                dispatch(updateSceneStore({
                    sceneSongIndex: selectedSongIndex,
                    sceneSceneIndex: selectedSceneIndex,
                }))
            }
        } else {
            setDidMount(true)
        }
    }, [isSongChangeDone, isSceneChangeDone])

    useEffect(() => {
        if (didMount) {
            if (sceneSceneIndex > -1) {
                dispatch(updateEntranceStore({
                    canTransitionAfterSceneChange: true,
                }))
            }
        }
    }, [sceneSongIndex, sceneSceneIndex])

    return null
}

export default SceneChangeManager
