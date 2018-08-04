import { CUBES } from '../../assets/scene/cubes/cubes'
import { DEFAULT_STAGE_KEY } from '../../assets/scene/cubes/cubesKeys'

import { getCharStringForNumber } from '../../helpers/formatHelper'

import {
    getValueInAbridgedMatrix
} from '../../helpers/generalHelper'

import {
    LEVELS,
    Z_INDICES_MATRIX_NAME
} from './sceneConstants'

import {
    CUBE_X_INDICES,
    CUBE_Y_INDICES
} from './Cubes/cubeIndexConstants'

export const getCubesForKey = (cubesKey) => {

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
        presences: {
            ...defaultStageCubes.presences,
            ...keyCubes.presences
        }
    }
}

export const getParentClassNameForSceneLogic = ({
    matrixName,
    level,
    xIndex,
    yIndex,
    value
}) => {

    let formattedValue = value

    if (matrixName === Z_INDICES_MATRIX_NAME) {
        // Allow zIndex to be appended dynamically by FacesZIndexStyle.
        formattedValue = !isNaN(value) ? getCharStringForNumber(value) : ''
    }

    /**
     * "Scene matrixInitial, levelIndex, xIndex, yIndex, zIndex."
     */
    return `${
        matrixName[0].toUpperCase()
    }${
        level[0]
    }${
        getCharStringForNumber(xIndex)
    }${
        yIndex
    }${
        formattedValue
    }`
}

export const getParentClassNamesForSceneLogic = (
    cubes,
    matrixName
) => {

    // Get ceiling and floor cubes.
    return LEVELS.map(level => {

        const { [matrixName]: matrix } = cubes[level]

        return CUBE_Y_INDICES.map(yIndex => {

            return CUBE_X_INDICES.map(xIndex => {

                const value = getValueInAbridgedMatrix(
                    matrix,
                    xIndex,
                    yIndex
                )

                return getParentClassNameForSceneLogic({
                    matrixName,
                    level,
                    xIndex,
                    yIndex,
                    value
                })
            })
        })
    })
}

export const getClassNameForSlantDirection = (slantDirection) => {

    return slantDirection ?
        `Scene__slantDirection__${slantDirection}` :
        ''
}
