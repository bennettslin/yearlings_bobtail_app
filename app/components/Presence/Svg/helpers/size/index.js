import { getValidYIndex } from '../../../../../helpers/cubeIndices'
import { Y_INDEX_SCALE_FACTORS } from '../../../../../constants/cubeRender'
import {
    ACTOR_DEFAULT_SCALE_FACTOR,
    ILLUSTRATOR_SCALE_FACTOR,
} from '../../../../../constants/scene'
import { STAGE_ASPECT_RATIO } from '../../../../../constants/stage'
import {
    BENNETT,
    BENNETT_LIZ,
    LIZ,
    BENNETT_REFLECTION,
    BENNETT_LIZ_REFLECTION,
    LIZ_REFLECTION,
} from '../../../../../constants/scene/actors'

const getPresenceScaleFactor = ({
    actorKey,
    scaleFactor,

}) => {
    // TODO: Get rid of this method once all actors have had scale factors adjusted. Scale to 15.4036.
    if (
        actorKey === BENNETT_LIZ ||
        actorKey === LIZ ||
        actorKey === BENNETT_REFLECTION ||
        actorKey === BENNETT_LIZ_REFLECTION ||
        actorKey === LIZ_REFLECTION ||
        actorKey === BENNETT
    ) {
        return ACTOR_DEFAULT_SCALE_FACTOR
    }

    return scaleFactor / ILLUSTRATOR_SCALE_FACTOR
}

export const getDimensionsForPresence = ({
    actorKey,
    viewBoxWidth,
    viewBoxHeight,
    yIndex,
    scaleFactor = 1,
    trimBottom = 0,

}) => {
    const
        finalScaleFactor = getPresenceScaleFactor({
            actorKey,
            scaleFactor,
        }) * Y_INDEX_SCALE_FACTORS[getValidYIndex(yIndex)]

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
