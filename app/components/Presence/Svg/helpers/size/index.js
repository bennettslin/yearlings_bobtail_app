import { getValidYIndex } from '../../../../../helpers/cubeIndices'
import { Y_INDEX_SCALE_FACTORS } from '../../../../../constants/cubeRender'
import {
    ACTOR,
    ACTOR_DEFAULT_SCALE_FACTOR,
} from '../../../../../constants/scene'
import { FURNITURE } from '../../../../../constants/scene/things'

const getPresenceScaleFactor = ({ presenceType, scaleFactor = 1 }) => {
    if (presenceType === ACTOR) {
        return ACTOR_DEFAULT_SCALE_FACTOR / 16.23
    }

    // TODO: Get rid of this once all things have had scale factors adjusted.
    if (
        presenceType === FURNITURE
    ) {
        return scaleFactor
    }

    return scaleFactor / 16.23
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
        finalScaleFactor = getPresenceScaleFactor({
            presenceType,
            scaleFactor,
        }) * Y_INDEX_SCALE_FACTORS[getValidYIndex(yIndex)]

    return {
        adjustedWidth: viewBoxWidth * finalScaleFactor,
        adjustedHeight: viewBoxHeight * finalScaleFactor * (1 - trimBottom),
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
