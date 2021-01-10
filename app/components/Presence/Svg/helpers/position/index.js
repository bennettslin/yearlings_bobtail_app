import { getNearestXIndex } from '../../../../../helpers/cubeIndices'
import { getHorizontalPlaneFractions } from '../../../../../helpers/cubePlanes'

const _getTileCentreForPresence = ({
    zIndex,
    xPosition,
    yIndex,
    zOffset = 0,

}) => {
    const
        xIndex = getNearestXIndex(xPosition),
        xOffset = xPosition - xIndex,

        tilePercentages = getHorizontalPlaneFractions({
            xIndex,
            yIndex,
            zIndex,
            xOffset,
            zOffset,
        }),

        {
            left,
            right,
        } = tilePercentages,

        // Get centre percentage by finding midpoint of one of the diagonals.
        centreXPercentage = left.back.x + (right.front.x - left.back.x) / 2,
        centreYPercentage = left.back.y + (right.front.y - left.back.y) / 2

    return {
        xPercentage: centreXPercentage,
        yPercentage: centreYPercentage,
    }
}

export const getXYForPresence = ({
    // Where to centre on the xIndex axis. Can be a float.
    xPosition = 5.5,

    // Where to position on the yIndex axis.
    yIndex,
    adjustedHeight,

    // Where to position above the given zIndex. Default is the zIndex.
    zIndex,
    zOffset,

}) => {

    const {
            xPercentage,
            yPercentage,

        } = _getTileCentreForPresence({
            zIndex,
            xPosition,
            yIndex,
            zOffset,
        }),

        x = xPercentage,
        y = yPercentage - adjustedHeight / 2

    return {
        x,
        y,
    }
}
