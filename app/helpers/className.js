import { getCharStringForNumber } from 'helpers/format'

import {
    getValueInAbridgedMatrix
} from 'helpers/general'

import {
    LEVELS,
    Z_INDICES_MATRIX_NAME
} from 'constants/scene'

import {
    CUBE_X_INDICES,
    CUBE_Y_INDICES
} from 'constants/cubeIndex'

export const getParentClassNameForSceneLogic = ({
    matrixName,
    level,
    xIndex,
    yIndex,
    value
}) => {

    let formattedValue = value

    if (matrixName === Z_INDICES_MATRIX_NAME) {
        // Allow zIndex to be appended dynamically by FaceZIndexStylesheet.
        formattedValue = !isNaN(value) ? getCharStringForNumber(value) : ''
    }

    /**
     * "MatrixInitial, levelIndex, xIndex, yIndex, value."
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

export const getChildClassNameForCubeLogic = ({
    level,
    xIndex,
    yIndex
}) => {

    // "Child cube levelIndex, xIndex, yIndex."
    return `K${
        level[0]
    }${
        getCharStringForNumber(xIndex)
    }${
        yIndex
    }`
}

export const getChildClassNameForFaceLogic = ({
    level,
    face,
    xIndex,
    yIndex
}) => {

    // "Child face levelIndex, faceIndex, xIndex, yIndex."
    return `F${
        level[0]
    }${
        face[0].toUpperCase()
    }${
        getCharStringForNumber(xIndex)
    }${
        yIndex
    }`
}
