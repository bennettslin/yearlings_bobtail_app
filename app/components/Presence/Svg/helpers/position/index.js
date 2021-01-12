import { getNearestXIndex } from '../../../../../helpers/cubeIndices'
import { getHorizontalPlaneFractions } from '../../../../../helpers/cubePlanes'

export const getCoordinatesForPresence = ({
    // Where to centre on the xIndex axis. Can be a float.
    xPosition = 5.5,

    // Where to position on the yIndex axis.
    yIndex,

    // Where to position above the given zIndex. Default is the zIndex.
    zIndex,
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
        adjustedLeft: centreXPercentage,
        adjustedTop: centreYPercentage,
    }
}
