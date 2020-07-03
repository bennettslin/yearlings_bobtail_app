import { createSelector } from 'reselect'
import { mapSelectedSceneIndex } from '../selected/selector'
import { mapQueuedScrollSceneIndex } from '../scrollLyric/selector'

/**
 * This prevents the filmstrip from showing the queued scene as neutral gray
 * right after it's activated or slid, but before it's selected. Technically,
 * there should be a corresponding selector for the queued verse, but because
 * the lyrics leave locked mode right away, the neutral gray does not linger.
 */
export const getMapIsSceneQueuedOrSelected = sceneIndex => createSelector(
    mapSelectedSceneIndex,
    mapQueuedScrollSceneIndex,
    (
        selectedSceneIndex,
        queuedScrollSceneIndex
    ) => (
        sceneIndex === (
            queuedScrollSceneIndex > -1 ?
                queuedScrollSceneIndex :
                selectedSceneIndex
        )
    )
)
