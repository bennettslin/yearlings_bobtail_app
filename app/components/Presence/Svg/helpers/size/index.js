import { getValidYIndex } from '../../../../../helpers/cubeIndices'
import { Y_INDEX_SCALE_FACTORS } from '../../../../../constants/cubeRender'
import {
    STAGE_ASPECT_RATIO,
    ILLUSTRATOR_SCALE_FACTOR,
} from '../../../../../constants/stage'

export const getDimensionsForPresence = ({
    viewBoxWidth,
    viewBoxHeight,
    yIndex,
    scaleFactor = 1,
    trimBottom = 0,

}) => {
    const
        finalScaleFactor =
            scaleFactor *
            ILLUSTRATOR_SCALE_FACTOR *
            Y_INDEX_SCALE_FACTORS[getValidYIndex(yIndex)]

    return {
        adjustedWidth: viewBoxWidth * finalScaleFactor,
        adjustedHeight:
            viewBoxHeight *
            finalScaleFactor *
            STAGE_ASPECT_RATIO *
            (1 - trimBottom),
    }
}

export const getViewBoxSize = svgString => {
    const
        startIndex = svgString.indexOf('viewBox="'),
        endIndex = svgString.indexOf('">', startIndex + 1),
        dimensions = svgString.slice(startIndex, endIndex).split(' '),
        viewBoxWidth = parseFloat(dimensions[2]),
        viewBoxHeight = parseFloat(dimensions[3])

    return Number.isFinite(viewBoxWidth) && Number.isFinite(viewBoxHeight) ? (
        {
            viewBoxWidth,
            viewBoxHeight,
        }
    ) : null
}
