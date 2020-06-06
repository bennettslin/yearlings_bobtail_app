import { getScene } from '../builds'
import { getValueInAbridgedMatrix } from '../../helpers/general'
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

export const getCeilingHslaForCube = ({
    cubesKey,
    yIndex,
    xIndex

}) => {
    const cubes = getCubesForKey(cubesKey)
    return getValueInAbridgedMatrix({
        matrix: cubes.ceiling.hslaColours,
        yIndex,
        xIndex
    })
}

export const getCeilingZIndexForCube = ({
    cubesKey,
    yIndex,
    xIndex

}) => {
    const cubes = getCubesForKey(cubesKey)
    return getValueInAbridgedMatrix({
        matrix: cubes.ceiling.zIndices,
        yIndex,
        xIndex
    })
}

export const getFloorHslaForCube = ({
    cubesKey,
    yIndex,
    xIndex

}) => {
    const cubes = getCubesForKey(cubesKey)
    return getValueInAbridgedMatrix({
        matrix: cubes.floor.hslaColours,
        yIndex,
        xIndex
    })
}

export const getFloorZIndexForCube = ({
    cubesKey,
    yIndex,
    xIndex

}) => {
    const cubes = getCubesForKey(cubesKey)
    return getValueInAbridgedMatrix({
        matrix: cubes.floor.zIndices,
        yIndex,
        xIndex
    })
}
