import { getCharStringForNumber } from '../../../helpers/formatHelper'
import { getValueInAbridgedMatrix } from '../../../helpers/generalHelper'

import {
    CUBE_X_AXIS_LENGTH,
    CUBE_Y_AXIS_LENGTH,
    CUBE_Z_AXIS_LENGTH
} from '../../../constants/stage'

import {
    CEILING,
    FLOOR
} from '../constants'

const midXIndex = CUBE_X_AXIS_LENGTH / 2

export const getRelativeZHeight = ({
    isFloor,
    zIndex,
    subtractedZIndex
}) => {

    let finalSubtractedZIndex = subtractedZIndex

    // If subtracted zIndex is not passed, establish default.
    if (isNaN(subtractedZIndex)) {
        finalSubtractedZIndex = isFloor ? 0 : CUBE_Z_AXIS_LENGTH
    }

    const finalTotalZIndex = isFloor ?
        zIndex - finalSubtractedZIndex :
        finalSubtractedZIndex - zIndex

    /**
     * Get the maximum height of the face, based on the cube's relative zIndex.
     * If negative, make it zero.
     */
    return Math.max(
        finalTotalZIndex,
        0
    )
}

export const getSideDirection = ({
    xIndex,
    slantDirection
}) => {

    // If slanted, then not applicable.
    if (slantDirection) {
        return ''

    } else {
        return xIndex < midXIndex ?
            'left' : 'right'
    }
}

export const getFrontCubeZIndex = ({
    isFloor,
    zIndices,
    slantDirection,
    xIndex,
    yIndex
}) => {

    const defaultZIndex = isFloor ? 0 : CUBE_Z_AXIS_LENGTH

    let frontXIndex = xIndex

    if (slantDirection === 'left') {
        if (yIndex === 1 || yIndex === 4) {
            frontXIndex++
        }

    } else if (slantDirection === 'right') {
        if (yIndex === 0 || yIndex === 3) {
            frontXIndex--
        }
    }

    // If there is no front cube, return null.
    if (yIndex === CUBE_Y_AXIS_LENGTH - 1) {
        return defaultZIndex

    } else {
        return getValueInAbridgedMatrix(
            zIndices, frontXIndex, yIndex + 1
        )
    }
}

export const getSideCubeZIndex = ({
    isFloor,
    zIndices,
    slantDirection,
    xIndex,
    yIndex
}) => {

    const defaultZIndex = isFloor ? 0 : CUBE_Z_AXIS_LENGTH

    if (slantDirection) {
        const isXOdd = xIndex % 2

        let
            sideXIndex = xIndex,
            sideYIndex = yIndex

        if (slantDirection === 'left') {
            const yIsBetween2And4 = yIndex >= 2 && yIndex <= 4

            if (
                (isXOdd && yIndex !== 1) ||
                (!isXOdd && yIndex !== 4)
            ) {
                sideXIndex--
            }

            if (
                (isXOdd && !yIsBetween2And4) ||
                (!isXOdd && yIsBetween2And4)
            ) {
                sideYIndex++
            }

        } else if (slantDirection === 'right') {
            const yIsBetween1And3 = yIndex >= 1 && yIndex <= 3

            if (
                (isXOdd && yIndex !== 3) ||
                (!isXOdd && yIndex !== 0)
            ) {
                sideXIndex++
            }

            if (
                (isXOdd && yIsBetween1And3) ||
                (!isXOdd && !yIsBetween1And3)
            ) {
                sideYIndex++
            }
        }

        if (
            sideXIndex < 0 ||
            sideXIndex === CUBE_X_AXIS_LENGTH ||
            sideYIndex < 0 ||
            sideYIndex === CUBE_Y_AXIS_LENGTH
        ) {
            // Return default if side cube is out of bounds.
            return defaultZIndex

        } else {
            return getValueInAbridgedMatrix(
                zIndices, sideXIndex, sideYIndex
            )
        }

    } else {

        /**
         * Side cube is to the right if cube is on the left side of stage, and
         * vice versa.
         */
        const isLeft = xIndex < midXIndex

        // Side cube is never out of bounds for default.
        return getValueInAbridgedMatrix(
            zIndices, xIndex + (isLeft ? 1 : -1), yIndex
        )
    }
}

export const getClassNameForFace = ({
    face,
    isFloor,
    xIndex,
    yIndex
}) => {

    // "Child face levelIndex, faceIndex, xIndex, yIndex."
    return `F${
        isFloor ? FLOOR[0] : CEILING[0]
    }${
        face[0].toUpperCase()
    }${
        getCharStringForNumber(xIndex)
    }${
        yIndex
    }`
}
