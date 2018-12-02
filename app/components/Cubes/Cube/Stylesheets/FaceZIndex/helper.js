import {
    CUBE_X_AXIS_LENGTH,
    CUBE_Z_AXIS_LENGTH
} from 'constants/cubeIndex'

import {
    LEFT,
    RIGHT
} from 'constants/scene'

import { getHorizontalPlaneFractions } from 'helpers/cube'

const midXIndex = CUBE_X_AXIS_LENGTH / 2

export const getSideDirection = ({
    xIndex,
    slantDirection
}) => {

    // If slanted, then not applicable.
    if (slantDirection) {
        return ''

    } else {
        return xIndex < midXIndex ?
            LEFT : RIGHT
    }
}

export const getCubeCornerPercentages = ({

    xIndex,
    yIndex,
    zIndex,
    isFloor,
    slantDirection

}) => {

    const baseZIndex = isFloor ? 0 : CUBE_Z_AXIS_LENGTH

    return {
        // This is the top face if floor, bottom face if ceiling.
        tile: getHorizontalPlaneFractions({
            xIndex,
            yIndex,
            zIndex,
            slantDirection
        }),

        // This is the face that is attached to the surface.
        base: getHorizontalPlaneFractions({
            xIndex,
            yIndex,
            zIndex: baseZIndex,
            slantDirection
        })
    }
}
