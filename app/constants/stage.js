// Check out Peoria Symphony Orchestra.

/**
 * Number to multiply one number to get the next, such that after six times,
 * 2 becomes 3, resulting in seven values.
 */
const exponent = 1.069913193933663,

    // Assume that floor height is this percent of stage height.
    stageYPercentage = 12,

    yPercentageUnit =
        exponent * exponent * exponent * exponent * exponent +
        exponent * exponent * exponent * exponent +
        exponent * exponent * exponent +
        exponent * exponent +
        exponent +
        1,

    unit = stageYPercentage / yPercentageUnit,

    yHeight0 = unit * exponent * exponent * exponent * exponent * exponent,
    yHeight1 = unit * exponent * exponent * exponent * exponent,
    yHeight2 = unit * exponent * exponent * exponent,
    yHeight3 = unit * exponent * exponent,
    yHeight4 = unit * exponent,
    yHeight5 = unit,

    TILE_Y_PERCENTAGES = [
        0,
        yHeight0,
        yHeight0 + yHeight1,
        yHeight0 + yHeight1 + yHeight2,
        yHeight0 + yHeight1 + yHeight2 + yHeight3,
        yHeight0 + yHeight1 + yHeight2 + yHeight3 + yHeight4,
        yHeight0 + yHeight1 + yHeight2 + yHeight3 + yHeight4 + yHeight5
    ]

module.exports = {

    // Percentage height of tiles plus a margin, arbitrary for now.
    STAGE_FLOOR_PERCENTAGE: stageYPercentage + 2,

    STAGE_ASPECT_RATIO: 1.66, // Was 1.2.
    STAGE_WIDTH_DESKTOP_OVERFLOW_PERCENTAGE: 1.05,
    VANISHING_POINT_Y_PERCENTAGE: 50,
    TILE_Y_PERCENTAGES,
    TILE_ROWS_LENGTH: 6,
    TILE_COLUMNS_LENGTH: 12
}
