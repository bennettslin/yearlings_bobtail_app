import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        isSceneChangeDone = useSelector(mapIsSceneChangeDone),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedSceneIndex = useSelector(mapSelectedSceneIndex)

    const completeSceneSelect = () => {
        dispatch(updateSceneStore({
            sceneSongIndex: selectedSongIndex,
            sceneSceneIndex: selectedSceneIndex
        }))
    }

    useEffect(() => {
        if (isSongChangeDone) {
            completeSceneSelect()
        }

    // This is set by stage curtain exit.
    }, [isSongChangeDone])

    useEffect(() => {
        if (isSceneChangeDone) {
            completeSceneSelect()
        }

    // This is set by scene exit.
    }, [isSceneChangeDone])

    return null
}

export default SceneChangeListener
