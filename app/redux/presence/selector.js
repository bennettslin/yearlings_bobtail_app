import { createSelector } from 'reselect'
import { getIsPresenceShownInScene } from '../../api/scene/presences'
import { mapCanTransitionAfterSceneChange } from '../entrance/selector'
import {
    mapSceneSongIndex,
    mapSceneSceneIndex,
    mapSceneCubesKey,
} from '../scene/selector'
import {
    mapSelectedSceneIndex,
    mapSelectedSongIndex,
} from '../selected/selector'

export const getMapIsPresenceShownInScene = ({
    yIndex,
    presenceType,
    actorKey,
    presenceKey,

}) => createSelector(
    mapCanTransitionAfterSceneChange,
    mapSelectedSongIndex,
    mapSelectedSceneIndex,
    mapSceneSongIndex,
    mapSceneSceneIndex,
    (
        canTransitionAfterSceneChange,
        selectedSongIndex,
        selectedSceneIndex,
        sceneSongIndex,
        sceneSceneIndex
    ) => {
        const
            isShownInCurrentScene = getIsPresenceShownInScene({
                songIndex: sceneSongIndex,
                sceneIndex: sceneSceneIndex,
                yIndex,
                presenceType,
                actorKey,
                presenceKey,
            }),
            isShownInNextScene = getIsPresenceShownInScene({
                songIndex: selectedSongIndex,
                sceneIndex: selectedSceneIndex,
                yIndex,
                presenceType,
                actorKey,
                presenceKey,
            })

        return (
            isShownInCurrentScene && (
                canTransitionAfterSceneChange ||

                /**
                 * If presence is also in next scene, then it should continue
                 * to show even during scene change.
                 */
                isShownInNextScene
            )
        )
    }
)

export const getMapZIndexForPresence = (zIndex, zIndices) => createSelector(
    mapSceneCubesKey,
    sceneCubesKey => {
        if (zIndex) {
            return zIndex

        } else if (zIndices && zIndices[sceneCubesKey]) {
            return zIndices[sceneCubesKey]

        // Zero is the default.
        } else {
            return 0
        }
    }
)
