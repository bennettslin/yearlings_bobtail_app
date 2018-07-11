import { getValueInAbridgedMatrix } from '../../../helpers/generalHelper'

import { CUBE_X_AXIS_LENGTH,
         CUBE_Y_AXIS_LENGTH,
         CUBE_Z_AXIS_LENGTH } from '../../../constants/stage'

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

    // TODO: It's different if there is a slantDirection.
    if (slantDirection === 'left') {
        return defaultZIndex

    } else if (slantDirection === 'right') {
        return defaultZIndex

    } else {

        // If there is no front cube, return null.
        if (yIndex === CUBE_Y_AXIS_LENGTH - 1) {
            return defaultZIndex

        } else {
            return getValueInAbridgedMatrix(
                zIndices, xIndex, yIndex + 1
            )
        }
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

    // FIXME: I did this completely backwards. The side cube is to the left for slanted left!
    if (slantDirection) {
        const isXOdd = xIndex % 2

        let
            sideXIndex = xIndex,
            sideYIndex = yIndex

        if (slantDirection === 'left') {

            const yIsBetween2And4 = yIndex >= 2 && yIndex <= 4

            if (isXOdd) {
                if (xIndex !== 2) {
                    sideXIndex++
                }
            } else {
                if (xIndex !== 5) {
                    sideXIndex++
                }
            }

            if (
                (yIsBetween2And4 && isXOdd) ||
                (!yIsBetween2And4 && !isXOdd)
            ) {
                sideYIndex--
            }

        } else if (slantDirection === 'right') {
            return defaultZIndex
        }

        if (
            sideXIndex < 0 ||
            sideXIndex === CUBE_X_AXIS_LENGTH ||
            sideYIndex < 0 ||
            sideYIndex === CUBE_Y_AXIS_LENGTH
        ) {
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

        return getValueInAbridgedMatrix(
            zIndices, xIndex + (isLeft ? 1 : -1), yIndex
        )
    }
}
