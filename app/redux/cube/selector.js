import { createSelector } from 'reselect'
import {
    getCeilingHslaForCube,
    getCeilingZIndexForCube,
    getFloorHslaForCube,
    getFloorZIndexForCube,
    getSlantDirectionForCube
} from '../../api/scene/cubes'
import { mapSceneCubesKey } from '../scene/selector'

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
