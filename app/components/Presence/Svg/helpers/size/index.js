import { getValidYIndex } from '../../../../../helpers/cubeIndices'
import { Y_INDEX_SCALE_FACTORS } from '../../../../../constants/cubeRender'
import {
    ACTOR,
    ACTOR_DEFAULT_SCALE_FACTOR,
    ILLUSTRATOR_SCALE_FACTOR,
} from '../../../../../constants/scene'
import {
    BACKDROP,
    BUBBLE,
    // CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET,
} from '../../../../../constants/scene/things'
import { STAGE_ASPECT_RATIO } from '../../../../../constants/stage'

const getPresenceScaleFactor = ({
    presenceType,
    scaleFactor,

}) => {
    // TODO: Get rid of this method once all actors have had scale factors adjusted.
    if (presenceType === ACTOR) {
        return ACTOR_DEFAULT_SCALE_FACTOR / 16.23
    }

    // TODO: Get rid of this once all things have had scale factors adjusted.
    if (
        presenceType === BACKDROP ||
        presenceType === BUBBLE ||
        // presenceType === CARDBOARD ||
        presenceType === CUTOUT ||
        presenceType === DOOR ||
        presenceType === FIXTURE ||
        presenceType === FLAT ||
        presenceType === FURNITURE ||
        presenceType === PANEL ||
        presenceType === PUPPET
    ) {
        return scaleFactor / ILLUSTRATOR_SCALE_FACTOR
    }

    return scaleFactor / 16.23
}

export const getDimensionsForPresence = ({
    presenceType,
    viewBoxWidth,
    viewBoxHeight,
    yIndex,
    scaleFactor = 1,
    trimBottom = 0,

}) => {
    const
        finalScaleFactor = getPresenceScaleFactor({
            presenceType,
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
