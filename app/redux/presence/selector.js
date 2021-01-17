import { createSelector } from 'reselect'
import { getIsPresenceShown } from '../../helpers/presence'
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

export const getMapIsPresenceShown = ({
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
    ) => getIsPresenceShown({
        canTransitionAfterSceneChange,
        selectedSongIndex,
        selectedSceneIndex,
        sceneSongIndex,
        sceneSceneIndex,
        yIndex,
        presenceType,
        actorKey,
        presenceKey,
    })
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
