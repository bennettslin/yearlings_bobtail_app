import { _getTileCentreForPresence } from '../ConfiguredPresenceSvg/helper/position'

import { CUBE_Z_AXIS_LENGTH } from 'constants/cubeIndex'
import {
    VANISHING_POINT_Y_PERCENTAGE,
    TILE_Y_PERCENTAGES
} from 'constants/cubeRender'
import { LS_STAGE_ASPECT_RATIO } from 'constants/stage'

const _getCubeWidthAndHeightPercentages = (yIndex) => {
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

export const getPresenceXYWidthHeight = ({

    // Needed to determine cube's zIndex.
    cubesKey,

    // Where to centre on the xIndex axis. Can be a float.
    xPosition,

    // Where to position on the yIndex axis.
    yIndex,

    // Where to position above the given zIndex. Default is the zIndex.
    zOffset,

    // How many cube lengths wide. Assume cube is one foot wide.
    xWidth,

    // How many cube lengths high.
    zHeight

}) => {

    const
        {
            xPercentage,
            yPercentage

        } = _getTileCentreForPresence({
            cubesKey,
            xPosition,
            yIndex,
            zOffset
        }),

        {
            width: cubeWidthPercentage,
            height: cubeHeightPercentage

        } = _getCubeWidthAndHeightPercentages(
            yIndex
        ),

        // TODO: Eventually get rid of width and height.
        width = cubeWidthPercentage * xWidth,
        height = cubeHeightPercentage * zHeight,

        x = xPercentage - width / 2,
        y = yPercentage - height

    return {
        x,
        y,
        width,
        height
    }
}
