import { CUBE_X_AXIS_LENGTH } from '../../../../constants/cubeIndex'

import { getHorizontalPlaneFractions } from '../../../../helpers/cube'
import { getValueInAbridgedMatrix } from '../../../../helpers/general'

import { getCubesForKey } from '../../../../scene/aggregators/cubes'

const _getNearestXIndex = (xPosition) => {
    let xIndex

    /**
     * Get the index and offset from the float.
     */
    if (xPosition < 0) {
        xIndex = 0

    } else if (xPosition > CUBE_X_AXIS_LENGTH - 1) {
        xIndex = CUBE_X_AXIS_LENGTH - 1

    } else {
        xIndex = Math.round(xPosition)
    }

    return xIndex
}

const _getTileCentreForPresence = ({
    cubesKey,
    xPosition,
    yIndex,
    zOffset = 0

}) => {
    /**
     * Presence needs to know the floor zIndex for positioning. However, slant
     * direction doesn't matter because presence positions as if default.
     */
    const { floor: { zIndices } } = getCubesForKey(cubesKey),

        xIndex = _getNearestXIndex(xPosition),

        xOffset = xPosition - xIndex,

        // If yIndex is -1, zIndex is automatically 0.
        zIndex = yIndex === -1 ?
            0 :
            getValueInAbridgedMatrix({
                matrix: zIndices,
                xIndex,
                yIndex
            }),

        tilePercentages = getHorizontalPlaneFractions({
            xIndex,
            yIndex,
            zIndex,
            xOffset,
            zOffset
        }),

        {
            left,
            right
        } = tilePercentages,

        // Get centre percentage by finding midpoint of one of the diagonals.
        centreXPercentage = left.back.x + (right.front.x - left.back.x) / 2,
        centreYPercentage = left.back.y + (right.front.y - left.back.y) / 2

    return {
        xPercentage: centreXPercentage,
        yPercentage: centreYPercentage
    }
}

export const getXYForPresence = ({

    // Needed to determine cube's zIndex.
    cubesKey,

    // Where to centre on the xIndex axis. Can be a float.
    xPosition = 5.5,

    // Where to position on the yIndex axis.
    yIndex,

    // Where to position above the given zIndex. Default is the zIndex.
    zOffset
}) => {

    const {
            xPercentage,
            yPercentage

        } = _getTileCentreForPresence({
            cubesKey,
            xPosition,
            yIndex,
            zOffset
        }),

        x = xPercentage,
        y = yPercentage

    return {
        x,
        y
    }
}
