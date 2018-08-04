import { getValueInAbridgedMatrix } from '../../../helpers/generalHelper'
import {
    getHorizontalPlaneFractionsForSlantDirection
} from '../Cubes/cubeRenderHelper'

import {
    CUBE_X_AXIS_LENGTH,
    CUBE_Z_AXIS_LENGTH
} from '../Cubes/cubeIndexConstants'

import {
    VANISHING_POINT_Y_PERCENTAGE,
    TILE_Y_PERCENTAGES
} from '../Cubes/cubeRenderConstants'

import {
    LS_STAGE_ASPECT_RATIO
} from '../../../constants/stage'

export const getTileCentreForPresence = ({

    xFloat,
    yIndex,
    zOffset = 0,
    zIndices,
    slantDirection

}) => {

    let xIndex,
        xOffset

    /**
     * Get the index and offset from the float.
     */
    if (xFloat < 0) {
        xIndex = 0

    } else if (xFloat > CUBE_X_AXIS_LENGTH - 1) {
        xIndex = CUBE_X_AXIS_LENGTH - 1

    } else {
        xIndex = Math.round(xFloat)
    }
    xOffset = xFloat - xIndex

    const zIndex = getValueInAbridgedMatrix(zIndices, xIndex, yIndex),

        tilePercentages = getHorizontalPlaneFractionsForSlantDirection({
            xIndex,
            yIndex,
            zIndex,
            xOffset,
            zOffset,
            slantDirection
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

export const getCubeWidthAndHeightPercentages = (yIndex) => {

    const
        tileYPercentage = (
            // These are the corner indices.
            TILE_Y_PERCENTAGES[yIndex] + TILE_Y_PERCENTAGES[yIndex + 1]
        ) / 2,

        cubeYPercentage =
            (
                // The full height percentage of the stage...
                VANISHING_POINT_Y_PERCENTAGE * 2

                // ... minus twice the yCoordinate of the centre of the tile...
                - tileYPercentage * 2
            )

            // ... divided by eight cubes.
            / (CUBE_Z_AXIS_LENGTH / 2),

        cubeXPercentage = cubeYPercentage / LS_STAGE_ASPECT_RATIO

    return {
        width: cubeXPercentage,
        height: cubeYPercentage
    }
}
