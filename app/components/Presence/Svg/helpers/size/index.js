import { getValidYIndex } from '../../../../../helpers/cubeIndices'
import { Y_INDEX_SCALE_FACTORS } from '../../../../../constants/cubeRender'
import {
    ACTOR,
    ACTOR_DEFAULT_SCALE_FACTOR,
} from '../../../../../constants/scene'

// Illustrator artboards are 1623 by 1082.
const
    ARTBOARD_WIDTH = 1623 / 100,
    ARTBOARD_HEIGHT = 1082 / 100

const getPresenceScaleFactor = ({ presenceType, scaleFactor = 1 }) => {
    if (presenceType === ACTOR) {
        return ACTOR_DEFAULT_SCALE_FACTOR
    }

    return scaleFactor
}

export const getSizeForPresence = ({
    presenceType,
    viewBoxWidth,
    viewBoxHeight,
    yIndex,
    scaleFactor,
    trimBottom = 0,

}) => {
    const
        validYIndex = getValidYIndex(yIndex),
        presenceScaleFactor = getPresenceScaleFactor({
            presenceType,
            scaleFactor,
        }),
        finalScaleFactor = presenceScaleFactor * Y_INDEX_SCALE_FACTORS[validYIndex],
        adjustedWidth = viewBoxWidth * finalScaleFactor / ARTBOARD_WIDTH,
        adjustedHeight =
            viewBoxHeight *
            finalScaleFactor / ARTBOARD_HEIGHT *

            // Don't show this much of the presence.
            (1 - trimBottom)

    return {
        adjustedWidth,
        adjustedHeight,
    }
}

export const getViewBoxSize = (svgString) => {
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
