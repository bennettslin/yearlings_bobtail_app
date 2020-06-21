import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import { updateSceneStore } from '../../../redux/scene/action'
import {
    mapSelectedSongIndex,
    mapSelectedSceneIndex
} from '../../../redux/selected/selector'

const SceneChangeUpdateDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedSceneIndex = useSelector(mapSelectedSceneIndex)

    const _dispatchCanSceneEnterOrUpdate = ({
        isUpdate,
        songIndex = selectedSongIndex,
        sceneIndex = selectedSceneIndex

    } = {}) => {
        logTransition('Begin enter or update from scene change.')
        dispatch(updateEntranceStore({
            ...isUpdate ? {
                canSceneUpdate: true
            } : {
                canSceneEnter: true
            }
        }))

        dispatch(updateSceneStore({
            sceneSongIndex: songIndex,
            sceneSceneIndex: sceneIndex
        }))
    }

    const dispatchCanSceneUpdate = () => {
        logTransition('Scene can update.')

        _dispatchCanSceneEnterOrUpdate({
            isUpdate: true,
            sceneIndex: -1
        })
    }

    const dispatchCanSceneEnter = () => {
        logTransition('Scene can enter.')
        _dispatchCanSceneEnterOrUpdate()
    }

    useImperativeHandle(ref, () => ({
        update: dispatchCanSceneUpdate,
        enter: dispatchCanSceneEnter
    }))
    return null
})

export default SceneChangeUpdateDispatcher
