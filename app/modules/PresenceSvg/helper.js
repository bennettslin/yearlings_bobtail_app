import isFinite from 'lodash.isfinite'

import { Y_INDEX_SCALE_FACTORS } from 'constants/cubeRender'

// Illustrator artboards are 1623 by 1082.
const
    ARTBOARD_WIDTH = 1623 / 100,
    ARTBOARD_HEIGHT = 1082 / 100

export const getAdjustedSize = ({
    viewBoxWidth,
    viewBoxHeight,
    yIndex,
    scaleFactor

}) => {
    const
        finalScaleFactor = scaleFactor * Y_INDEX_SCALE_FACTORS[yIndex],
        adjustedWidth = viewBoxWidth * finalScaleFactor / ARTBOARD_WIDTH,
        adjustedHeight = viewBoxHeight * finalScaleFactor / ARTBOARD_HEIGHT

    return {
        adjustedWidth,
        adjustedHeight
    }
}

export const getViewBoxSize = (svgString) => {
    const
        startViewBox = svgString.indexOf('viewBox="'),
        endViewBox = svgString.indexOf('">', startViewBox + 1),
        viewBoxDimensions =
            svgString.slice(startViewBox, endViewBox).split(' '),
        viewBoxWidth = parseFloat(viewBoxDimensions[2]),
        viewBoxHeight = parseFloat(viewBoxDimensions[3])

    return isFinite(viewBoxWidth) && isFinite(viewBoxHeight) ? (
        {
            viewBoxWidth,
            viewBoxHeight
        }
    ) : null
}
