import isFinite from 'lodash/isfinite'

import { Y_INDEX_SCALE_FACTORS } from 'constants/cubeRender'
import { getValidYIndex } from 'helpers/general'

// Illustrator artboards are 1623 by 1082.
const
    ARTBOARD_WIDTH = 1623 / 100,
    ARTBOARD_HEIGHT = 1082 / 100

export const getSizeForPresence = ({
    viewBoxWidth,
    viewBoxHeight,
    yIndex,
    scaleFactor = 1,
    trimBottom = 0

}) => {
    const
        validYIndex = getValidYIndex(yIndex),
        finalScaleFactor = scaleFactor * Y_INDEX_SCALE_FACTORS[validYIndex],
        adjustedWidth = viewBoxWidth * finalScaleFactor / ARTBOARD_WIDTH,
        adjustedHeight =
            viewBoxHeight *
            finalScaleFactor / ARTBOARD_HEIGHT *

            // Don't show this much of the presence.
            (1 - trimBottom)

    return {
        adjustedWidth,
        adjustedHeight
    }
}

export const getViewBoxSize = (svgString) => {
    const
        startIndex = svgString.indexOf('viewBox="'),
        endIndex = svgString.indexOf('">', startIndex + 1),
        dimensions = svgString.slice(startIndex, endIndex).split(' '),
        viewBoxWidth = parseFloat(dimensions[2]),
        viewBoxHeight = parseFloat(dimensions[3])

    return isFinite(viewBoxWidth) && isFinite(viewBoxHeight) ? (
        {
            viewBoxWidth,
            viewBoxHeight
        }
    ) : null
}
