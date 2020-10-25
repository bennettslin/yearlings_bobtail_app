import { createSelector } from 'reselect'
import { getIsShownInSceneForPresence } from '../../api/scene/presences'
import { mapCanTransitionAfterSceneChange } from '../entrance/selector'
import {
    mapSceneSongIndex,
    mapSceneSceneIndex
} from '../scene/selector'
import {
    mapSelectedSceneIndex,
    mapSelectedSongIndex
} from '../selected/selector'

export const getMapIsPresenceShownInScene = ({
    yIndex,
    presenceType,
    actorKey,
    presenceKey

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
            isShownInCurrentScene = getIsShownInSceneForPresence({
                songIndex: sceneSongIndex,
                sceneIndex: sceneSceneIndex,
                yIndex,
                presenceType,
                actorKey,
                presenceKey
            }),
            isShownInNextScene = getIsShownInSceneForPresence({
                songIndex: selectedSongIndex,
                sceneIndex: selectedSceneIndex,
                yIndex,
                presenceType,
                actorKey,
                presenceKey
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
