import { getNearestXIndex } from '../../../../../helpers/cubeIndices'
import { getHorizontalPlaneFractions } from '../../../../../helpers/cubePlanes'
import { getFloorZIndexForCube } from '../../../../../api/scene/cubes'

const _getTileCentreForPresence = ({
    cubesKey,
    xPosition,
    yIndex,
    zOffset = 0

}) => {
    const
        xIndex = getNearestXIndex(xPosition),
        xOffset = xPosition - xIndex,

        /**
         * Presence needs to know the floor zIndex for positioning. However,
         * slant direction doesn't matter because presence positions as if
         * default.
         */
        zIndex = getFloorZIndexForCube(
            cubesKey,
            yIndex,
            xIndex
        ),

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
