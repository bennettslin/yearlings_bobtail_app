import { getScene } from '../builds'
import { getValidYIndex } from '../../helpers/cube'
import { DEFAULT } from '../../constants/scene/cubes'
import { DEFAULT_STAGE_KEY } from '../../constants/scene/scenes'

const {
    cubes: CUBES
} = getScene()

export const getCubesForKey = cubesKey => {
    const defaultStageCubes = CUBES[DEFAULT_STAGE_KEY],
        keyCubes = CUBES[cubesKey]

    return {
        ceiling: {
            ...defaultStageCubes.ceiling,
            ...keyCubes.ceiling
        },
        floor: {
            ...defaultStageCubes.floor,
            ...keyCubes.floor
        },
        slantDirection: keyCubes.slantDirection
    }
}

const getValueInAbridgedMatrix = (matrix, yIndex, xIndex) => {
    // Assume that matrix is an array of arrays.
    const
        validYIndex = getValidYIndex(yIndex),

        // Use previous row array if no row array for this y-index.
        rowArray = matrix.length > validYIndex ?
            matrix[validYIndex] :
            matrix[matrix.length - 1],

        // Use previous entry if no entry for this x-index.
        value = rowArray.length > xIndex ?
            rowArray[xIndex] :
            rowArray[rowArray.length - 1]

    return value
}

export const getCeilingHslaForCube = (cubesKey, yIndex, xIndex) => (
    getValueInAbridgedMatrix(
        getCubesForKey(cubesKey).ceiling.hslaColours,
        yIndex,
        xIndex
    )
)

export const getCeilingZIndexForCube = (cubesKey, yIndex, xIndex) => (
    getValueInAbridgedMatrix(
        getCubesForKey(cubesKey).ceiling.zIndices,
        yIndex,
        xIndex
    )
)

export const getFloorHslaForCube = (cubesKey, yIndex, xIndex) => (
    getValueInAbridgedMatrix(
        getCubesForKey(cubesKey).floor.hslaColours,
        yIndex,
        xIndex
    )
)

export const getFloorZIndexForCube = (cubesKey, yIndex, xIndex) => (
    getValueInAbridgedMatrix(
        getCubesForKey(cubesKey).floor.zIndices,
        yIndex,
        xIndex
    )
)

export const getSlantDirectionForCube = cubesKey => (
    getCubesForKey(cubesKey).slantDirection || DEFAULT
)
