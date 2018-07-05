import { getValueInAbridgedMatrix } from '../../../helpers/generalHelper'

import { CUBE_X_AXIS_LENGTH,
         CUBE_Y_AXIS_LENGTH,
         CUBE_Z_AXIS_LENGTH } from '../../../constants/stage'

const midXIndex = CUBE_X_AXIS_LENGTH / 2,
midZIndex = CUBE_Z_AXIS_LENGTH / 2

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

export const doRenderFrontOrSideFace = ({
    xIndex,
    sideDirection,
    relativeZHeight
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
    return Boolean(relativeZHeight)
}

export const doRenderTileFace = ({
    isFloor,
    zIndex,
    oppositeTilesMeet
}) => {
    // Render if ceiling and floor tiles do not meet and...
    return !oppositeTilesMeet &&

        // ... if tile is beyond the halfway zIndex.
        (
            isFloor ?
                zIndex < midZIndex :
                zIndex >= midZIndex
        )
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

    // TODO: It's different if there is a slantDirection.
    if (slantDirection === 'left') {
        return defaultZIndex

    } else if (slantDirection === 'right') {
        return defaultZIndex

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

// FIXME: Don't duplicate code.
export const getNextEntityToRender = ({
    xIndex,
    yIndex,
    renderState
}) => {
    let nextEntity

    if (xIndex < CUBE_X_AXIS_LENGTH) {
        // Next entity in same row.
        nextEntity = renderState[yIndex][xIndex + 1]

    } else if (yIndex < CUBE_Y_AXIS_LENGTH) {
        // First entity in new row.
        nextEntity = renderState[yIndex + 1][0]

    } else {
        // All are now rendered.
        nextEntity = renderState.all
    }

    return nextEntity
}


export const getNextStateForRender = ({
    xIndex,
    yIndex,
    renderState
}) => {
    if (xIndex < CUBE_X_AXIS_LENGTH) {
        // Next entity in same row.
        renderState[yIndex][xIndex + 1] = true

    } else if (yIndex < CUBE_Y_AXIS_LENGTH) {
        // First entity in new row.
        renderState[yIndex + 1][0] = true

    } else {
        // All are now rendered.
        renderState.all = true
    }

    // FIXME: This should spread the child object as well.
    return { ...renderState }
}
