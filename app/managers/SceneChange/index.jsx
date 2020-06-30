import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetSceneChange } from '../../redux/entrance/action'
import { updateSceneStore } from '../../redux/scene/action'
import {
    mapIsSongChangeDone,
    mapIsSceneChangeDone
} from '../../redux/entrance/selector'
import {
    mapSelectedSongIndex,
    mapSelectedSceneIndex
} from '../../redux/selected/selector'

const SceneChangeManager = () => {
    const
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        isSceneChangeDone = useSelector(mapIsSceneChangeDone),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedSceneIndex = useSelector(mapSelectedSceneIndex)

    useEffect(() => {
        // Scene changed, so begin transition if not already in place.
        if (isSongChangeDone && isSceneChangeDone) {
            dispatch(resetSceneChange())
        }

    }, [selectedSongIndex, selectedSceneIndex])

    useEffect(() => {
        if (isSongChangeDone && isSceneChangeDone) {
            dispatch(updateSceneStore({
                sceneSongIndex: selectedSongIndex,
                sceneSceneIndex: selectedSceneIndex
            }))
        }

    }, [isSongChangeDone, isSceneChangeDone])

    return null
}

export default SceneChangeManager
