import { createSelector } from 'reselect'
import {
    getCeilingHslaForCube,
    getCeilingZIndexForCube,
    getFloorHslaForCube,
    getFloorZIndexForCube,
    getSlantDirectionForCube
} from '../../api/scene/cubes'
import { getIsShownInSceneForPresence } from '../../api/scene/presences'
import { DEFAULT_STAGE_KEY } from '../../constants/scene/scenes'

export const mapSceneCubesKey = (
    { sceneStore: { sceneCubesKey } }
) => sceneCubesKey || DEFAULT_STAGE_KEY

export const mapSceneSkyTime = (
    { sceneStore: { sceneSkyTime } }
) => sceneSkyTime

export const mapSceneSkySeason = (
    { sceneStore: { sceneSkySeason } }
) => sceneSkySeason

// TODO: Does scene store really need its own song and scene index?
const mapSceneSongIndex = (
    { sceneStore: { sceneSongIndex } }
) => sceneSongIndex

const mapSceneSceneIndex = (
    { sceneStore: { sceneSceneIndex } }
) => sceneSceneIndex

export const mapIsPresenceShownInScene = ({
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

export const mapCubeCeilingHsla = (yIndex, xIndex) => createSelector(
    mapSceneCubesKey,
    sceneCubesKey => getCeilingHslaForCube(
        sceneCubesKey,
        yIndex,
        xIndex
    )
)

export const mapCubeCeilingZIndex = (yIndex, xIndex) => createSelector(
    mapSceneCubesKey,
    sceneCubesKey => getCeilingZIndexForCube(
        sceneCubesKey,
        yIndex,
        xIndex
    )
)

export const mapCubeFloorHsla = (yIndex, xIndex) => createSelector(
    mapSceneCubesKey,
    sceneCubesKey => getFloorHslaForCube(
        sceneCubesKey,
        yIndex,
        xIndex
    )
)

export const mapCubeFloorZIndex = (yIndex, xIndex) => createSelector(
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
