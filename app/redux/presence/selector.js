import { createSelector } from 'reselect'
import {
    getIsShownInSceneForPresence,
    getArrangementForPresence
} from '../../api/scene/presences'
import { getNearestXIndex } from '../../helpers/cubeIndices'
import { getMapCubeFloorZIndex } from '../cube/selector'
import {
    mapSceneSongIndex,
    mapSceneSceneIndex,
    mapIsStageDefault
} from '../scene/selector'

const mapIsPresenceShownInScene = ({
    yIndex,
    presenceType,
    actorKey,
    presenceKey

}) => createSelector(
    mapSceneSongIndex,
    mapSceneSceneIndex,
    (
        songIndex,
        sceneIndex
    ) => getIsShownInSceneForPresence({
        songIndex,
        sceneIndex,
        yIndex,
        presenceType,
        actorKey,
        presenceKey
    })
)

export const getMapPresenceFloorZIndex = ({
    // This yIndex determines whether to render in a given layer.
    yIndex,
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

    return createSelector(
        mapIsPresenceShownInScene({
            yIndex,
            presenceType,
            actorKey,
            presenceKey
        }),
        getMapCubeFloorZIndex(
            arrangedYIndex,
            xIndex
        ),
        mapIsStageDefault,
        (
            isPresenceShownInScene,
            cubeFloorZIndex,
            isStageDefault

        ) => (
            // Return null if presence isn't to be shown.
            isPresenceShownInScene && !isStageDefault ?
                cubeFloorZIndex :
                null
        )
    )
}
