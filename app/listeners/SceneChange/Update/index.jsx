import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import { updateSceneStore } from '../../../redux/scene/action'
import {
    getCubesKeyForScene,
    getLayersForScene,
    getSkyTimeForScene,
    getSkySeasonForScene
} from '../../../api/album/scenes'
import {
    mapSelectedSongIndex,
    mapSelectedSceneIndex
} from '../../../redux/selected/selectors'

const SceneChangeUpdateDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedSceneIndex = useSelector(mapSelectedSceneIndex)

    const _dispatchCanSceneEnterOrUpdate = ({
        isUpdate,
        songIndex = selectedSongIndex,
        sceneIndex = selectedSceneIndex

    }) => {
        const
            sceneCubesKey = getCubesKeyForScene(songIndex, sceneIndex),
            sceneLayers = getLayersForScene(songIndex, sceneIndex),
            sceneSkyTime = getSkyTimeForScene(songIndex, sceneIndex),
            sceneSkySeason = getSkySeasonForScene(songIndex, sceneIndex)

        logTransition('Begin enter or update from scene change.')
        dispatch(updateEntranceStore({
            ...isUpdate ? {
                canSceneUpdate: true
            } : {
                canSceneEnter: true
            }
        }))

        dispatch(updateSceneStore({
            sceneCubesKey,
            sceneSongIndex: songIndex,
            sceneSceneIndex: sceneIndex,
            sceneLayers,
            sceneSkyTime,
            sceneSkySeason
        }))
    }

    const dispatchCanSceneUpdate = () => {
        logTransition('Scene can update.')

        _dispatchCanSceneEnterOrUpdate({
            isUpdate: true,
            sceneIndex: -1
        })
    }

    const dispatchCanSceneEnter = ({
        songIndex,
        sceneIndex

    } = {}) => {
        logTransition('Scene can enter.')

        _dispatchCanSceneEnterOrUpdate({
            songIndex,
            sceneIndex
        })
    }

    useImperativeHandle(ref, () => ({
        dispatchCanSceneUpdate,
        dispatchCanSceneEnter
    }))
    return null
})

export default SceneChangeUpdateDispatcher
