import { getCubesForKey } from 'scene/cubes'

import {
    CUBE_X_AXIS_LENGTH,
    CUBE_Z_AXIS_LENGTH
} from 'constants/cubeIndex'
import {
    VANISHING_POINT_Y_PERCENTAGE,
    TILE_Y_PERCENTAGES
} from 'constants/cubeRender'
import {
    LS_STAGE_ASPECT_RATIO
} from 'constants/stage'

import {
    getHorizontalPlaneFractions
} from 'helpers/cube'
import { getValueInAbridgedMatrix } from 'helpers/general'

export const getPresencesForCubes = ({

    cubesKey,
    songIndex,
    sceneIndex,
    yIndex

}) => {
    const cubes = getCubesForKey(cubesKey),

        scenePresences = cubes.presences[
            `song${songIndex}_scene${sceneIndex}`
        ]

    /**
     * Once complete, there will always be a presences object for the song and
     * scene that expects it. In the meantime, however, it may not exist, so
     * do this safety check.
     */
    return scenePresences ?
        scenePresences[`cubes${yIndex}`] :
        null
}

export const getNearestXIndex = (xFloat) => {
    let xIndex

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

    return xIndex
}

const _getTileCentreForPresence = ({

    cubesKey,
    xFloat,
    yIndex,
    zOffset = 0

}) => {

    const {
            /**
             * Presence needs to know the floor zIndex for positioning.
             */
            floor: { zIndices },
            slantDirection = ''
        } = getCubesForKey(cubesKey),

        xIndex = getNearestXIndex(xFloat),

        xOffset = xFloat - xIndex,

        zIndex = getValueInAbridgedMatrix(zIndices, xIndex, yIndex),

        tilePercentages = getHorizontalPlaneFractions({
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

export const getPresenceXYWidthAndHeight = ({

    // Needed to determine cube's zIndex.
    cubesKey,

    // Where to centre on the xIndex axis. Can be a float.
    xFloat,

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
            xFloat,
            yIndex,
            zOffset
        }),

        {
            width: cubeWidthPercentage,
            height: cubeHeightPercentage

        } = _getCubeWidthAndHeightPercentages(
            yIndex
        ),

        width = cubeWidthPercentage * xWidth,
        height = cubeHeightPercentage * zHeight,

        x = xPercentage - width / 2,
        y = yPercentage - height

    return {
        x: x.toFixed(2),
        y: y.toFixed(2),
        width: width.toFixed(2),
        height: height.toFixed(2)
    }
}
