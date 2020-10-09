import { createSelector } from 'reselect'
import {
    getIsShownInSceneForPresence,
    getArrangementForPresence
} from '../../api/scene/presences'
import { getNearestXIndex } from '../../helpers/cubeIndices'
import { getMapCubeFloorZIndex } from '../cube/selector'
import {
    mapSceneSongIndex,
    mapSceneSceneIndex
} from '../scene/selector'

export const getMapIsPresenceShownInScene = ({
    yIndex,
    presenceType,
    actorKey,
    presenceKey

}) => createSelector(
    mapSceneSongIndex,
    mapSceneSceneIndex,
    (
        sceneSongIndex,
        sceneSceneIndex
    ) => getIsShownInSceneForPresence({
        songIndex: sceneSongIndex,
        sceneIndex: sceneSceneIndex,
        yIndex,
        presenceType,
        actorKey,
        presenceKey
    })
)

export const getMapPresenceFloorZIndex = ({
    presenceType,
    actorKey,
    presenceKey

}) => {
    const {
            // This yIndex is for scale and position.
            yIndex: arrangedYIndex,
            xPosition
        } = getArrangementForPresence({
            presenceType,
            actorKey,
            presenceKey
        }),
        xIndex = getNearestXIndex(xPosition)

    return getMapCubeFloorZIndex(
        arrangedYIndex,
        xIndex
    )
}
