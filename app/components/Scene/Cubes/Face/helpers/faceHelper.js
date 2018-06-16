import { CUBE_X_AXIS_LENGTH,
         CUBE_Z_AXIS_LENGTH } from '../../../../../constants/stage'

const midXIndex = CUBE_X_AXIS_LENGTH / 2,
    midZIndex = CUBE_Z_AXIS_LENGTH / 2

export const getIsTileFace = (face) => {
    return face === 'tile'
}

export const getIsFrontFace = (face) => {
    return face === 'front'
}

export const getIsSideFace = (face) => {
    return face === 'side'
}

export const getMaxFaceHeight = ({
    isFloor,
    zIndex
}) => {
    /**
     * Get the maximum height of the face, based on the cube's zIndex. If
     * negative, make it zero.
     */
    return Math.max(
        isFloor ? zIndex : (CUBE_Z_AXIS_LENGTH - zIndex),
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

export const doRenderFrontOrSideFace = ({
    xIndex,
    sideDirection,
    maxFaceHeight
}) => {

    // If it's a side face in a middle cube, don't render.
    if (sideDirection) {
        if (
            (sideDirection === 'left' && xIndex === midXIndex - 1) ||
            (sideDirection === 'right' && xIndex === midXIndex)
        ) {
            return false
        }
    }

    // Otherwise, if front or side, render if it has any height at all.
    return Boolean(maxFaceHeight)
}

export const doRenderTileFace = ({
    maxFaceHeight
}) => {
    // Render if it's below the halfway zIndex.
    return maxFaceHeight < midZIndex
}
