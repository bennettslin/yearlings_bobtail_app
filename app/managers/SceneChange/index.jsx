import { useEffect, useState, memo } from 'react'
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
                    sceneSceneIndex: selectedSceneIndex
                }))
            }
        } else {
            setDidMount(true)
        }
    }, [isSongChangeDone, isSceneChangeDone])

    return null
}

export default memo(SceneChangeManager)
