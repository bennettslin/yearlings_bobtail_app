// Check out Peoria Symphony Orchestra.

const

    /**
     * Number to multiply one number to get the next, such that after six
     * times 2 becomes 3, resulting in seven values.
     */
    exponent = 1.069913193933663,

    // Assume that floor height is 20% of stage height.
    stageYPercentage = 20,

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

    FLOOR_PANEL_Y_PERCENTAGES = [
        0,
        yHeight0,
        yHeight0 + yHeight1,
        yHeight0 + yHeight1 + yHeight2,
        yHeight0 + yHeight1 + yHeight2 + yHeight3,
        yHeight0 + yHeight1 + yHeight2 + yHeight3 + yHeight4,
        yHeight0 + yHeight1 + yHeight2 + yHeight3 + yHeight4 + yHeight5
    ]

module.exports = {
    STAGE_ASPECT_RATIO: 1.2,
    STAGE_WIDTH_DESKTOP_OVERFLOW_PERCENTAGE: 1.05,
    VANISHING_POINT_Y_PERCENTAGE: 60,
    FLOOR_PANEL_Y_PERCENTAGES
}
