import { createSelector } from 'reselect'
import {
    getCeilingHslaForCube,
    getCeilingZIndexForCube,
    getFloorHslaForCube,
    getFloorZIndexForCube,
    getSlantDirectionForCube
} from '../../api/scene/cubes'
import {
    getIsShownInSceneForPresence,
    getArrangementForPresence
} from '../../api/scene/presences'
import { DEFAULT_STAGE_KEY } from '../../constants/scene/scenes'
import { getNearestXIndex } from '../../helpers/cubeIndices'
import { SCENE_STORE } from '../../constants/store'

export const mapSceneSkyTime = (
    { [SCENE_STORE]: { sceneSkyTime } }
) => sceneSkyTime

export const mapSceneSkySeason = (
    { [SCENE_STORE]: { sceneSeason } }
) => sceneSeason

const mapSceneCubesKey = (
    { [SCENE_STORE]: { sceneCubesKey } }
) => sceneCubesKey || DEFAULT_STAGE_KEY

export const getMapCubeCeilingHsla = (yIndex, xIndex) => createSelector(
    mapSceneCubesKey,
    sceneCubesKey => getCeilingHslaForCube(
        sceneCubesKey,
        yIndex,
        xIndex
    )
)

export const getMapCubeCeilingZIndex = (yIndex, xIndex) => createSelector(
    mapSceneCubesKey,
    sceneCubesKey => getCeilingZIndexForCube(
        sceneCubesKey,
        yIndex,
        xIndex
    )
)

export const getMapCubeFloorHsla = (yIndex, xIndex) => createSelector(
    mapSceneCubesKey,
    sceneCubesKey => getFloorHslaForCube(
        sceneCubesKey,
        yIndex,
        xIndex
    )
)

export const getMapCubeFloorZIndex = (yIndex, xIndex) => createSelector(
    mapSceneCubesKey,
    sceneCubesKey => getFloorZIndexForCube(
        sceneCubesKey,
        yIndex,
        xIndex
    )
)

export const mapCubeSlantDirection = createSelector(
    mapSceneCubesKey,
    sceneCubesKey => getSlantDirectionForCube(sceneCubesKey)
)

// TODO: Does scene store really need its own song and scene index?
const mapSceneSongIndex = (
    { [SCENE_STORE]: { sceneSongIndex } }
) => sceneSongIndex

const mapSceneSceneIndex = (
    { [SCENE_STORE]: { sceneSceneIndex } }
) => sceneSceneIndex

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
        (
            isPresenceShownInScene,
            cubeFloorZIndex

        // Return null if presence isn't shown in this scene.
        ) => (
            isPresenceShownInScene ? cubeFloorZIndex : null
        )
    )
}
