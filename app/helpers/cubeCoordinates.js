import {
    CUBE_X_AXIS_LENGTH,
    CUBE_Z_AXIS_LENGTH
} from '../constants/cubeIndex'
import {
    VANISHING_POINT_Y_PERCENTAGE,
    TILE_Y_PERCENTAGES,
    SLANTED_TILE_Y_PERCENTAGES,
    SLANTED_TILE_X_UNITS_LENGTH
} from '../constants/cubeRender'
import {
    LEFT,
    RIGHT
} from '../constants/scene/cubes'

/***************
 * COORDINATES *
 ***************/

const _roundPercentage = (rawPercentage) => {
    return Math.round(rawPercentage * 100) / 100
}

const _getXPercentage = (
    xCornerIndex,
    yCornerIndex,
    slantDirection

) => {

    const isSlanted = Boolean(slantDirection),

        // Use x-axis length value based on default or slanted arrangement.
        xAxisLength = isSlanted ?
            SLANTED_TILE_X_UNITS_LENGTH : CUBE_X_AXIS_LENGTH,

        // Get x-coordinate percentage at zIndex 0.
        baseYPercentage = _getYPercentage(
            yCornerIndex, 0, isSlanted
        ),

        tilesWidthPercentage =
            100 / VANISHING_POINT_Y_PERCENTAGE
            * (VANISHING_POINT_Y_PERCENTAGE - baseYPercentage),

        rawXPercentage =
            (100 - tilesWidthPercentage) / 2
            + xCornerIndex * tilesWidthPercentage / xAxisLength

    /**
     * Hard-coding some constants to optimally position the cubes. I no longer
     * have the bandwidth to do any real math here, unfortunately. Also, not
     * sure why the multiplier values between left and right would be
     * different...
     */
    let addend = 0,
        multiplier = 1

    if (slantDirection === LEFT) {
        addend = -2.5
        multiplier = 1.0575
    } else if (slantDirection === RIGHT) {
        multiplier = 1.0475
    }

    return (
        _roundPercentage(100 - rawXPercentage)
        * multiplier
        + addend
    )
}

const _getYPercentage = (
    yCornerIndex,
    zIndex,
    slantDirection

) => {

    const isSlanted = Boolean(slantDirection),

        // Use array based on default or slanted arrangement.
        tileYPercentages = isSlanted ?
            SLANTED_TILE_Y_PERCENTAGES : TILE_Y_PERCENTAGES,

        tileYPercentage = tileYPercentages[yCornerIndex],

        rawYPercentage =
            tileYPercentage + zIndex * 2 / CUBE_Z_AXIS_LENGTH
            * (VANISHING_POINT_Y_PERCENTAGE - tileYPercentage)

    /**
     * Hard-coding some constants to optimally position the cubes. I no longer
     * have the bandwidth to do any real math here, unfortunately.
     */
    const addend = isSlanted ? -1.25 : 0,
        multiplier = isSlanted ? 1.025 : 1

    return (
        _roundPercentage(100 - rawYPercentage)
        * multiplier
        + addend
    )
}

export const getXYPercentages = (
    /**
     * When default, this is an interval from 0 to 12. There are twelve cube
     * columns.
     */
    xCornerIndex,

    /**
     * When default, this is an interval from 0 to 6. There are six cube rows.
     */
    yCornerIndex,

    /**
     * This is a number from 0 to 16, and also 20.
     */
    zIndex = 0,

    slantDirection

) => {

    return {
        x: _getXPercentage(
            xCornerIndex,
            yCornerIndex,
            slantDirection
        ),
        y: _getYPercentage(
            yCornerIndex,
            zIndex,
            slantDirection
        )
    }
}
