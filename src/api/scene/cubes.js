import { getScene } from '../builds'
import { getValueInAbridgedMatrix } from '../../helpers/cubeIndices'
import { DEFAULT } from '../../constants/scene/cubes'
import { DEFAULT_STAGE_KEY } from '../../constants/scene/scenes'

const {
    cubes: CUBES,
} = getScene()

export const getCubesForKey = cubesKey => {
    const defaultStageCubes = CUBES[DEFAULT_STAGE_KEY],
        keyCubes = CUBES[cubesKey]

    return {
        ceiling: {
            ...defaultStageCubes.ceiling,
            ...keyCubes.ceiling,
        },
        floor: {
            ...defaultStageCubes.floor,
            ...keyCubes.floor,
        },
        slantDirection: keyCubes.slantDirection,
    }
}

export const getCeilingHslaForCube = (cubesKey, yIndex, xIndex) => (
    getValueInAbridgedMatrix(
        getCubesForKey(cubesKey).ceiling.hslaColours,
        yIndex,
        xIndex,
    )
)

export const getCeilingZIndexForCube = (cubesKey, yIndex, xIndex) => (
    getValueInAbridgedMatrix(
        getCubesForKey(cubesKey).ceiling.zIndices,
        yIndex,
        xIndex,
    )
)

export const getFloorHslaForCube = (cubesKey, yIndex, xIndex) => (
    getValueInAbridgedMatrix(
        getCubesForKey(cubesKey).floor.hslaColours,
        yIndex,
        xIndex,
    )
)

export const getFloorZIndexForCube = (cubesKey, yIndex, xIndex) => (
    getValueInAbridgedMatrix(
        getCubesForKey(cubesKey).floor.zIndices,
        yIndex,
        xIndex,
    )
)

export const getSlantDirectionForCube = cubesKey => (
    getCubesForKey(cubesKey).slantDirection || DEFAULT
)
