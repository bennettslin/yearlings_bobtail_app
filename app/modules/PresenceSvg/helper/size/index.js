import isFinite from 'lodash/isfinite'

import { Y_INDEX_SCALE_FACTORS } from 'constants/cubeRender'
import { getValidYIndex } from 'helpers/general'
import { ACTOR } from '../../../../constants/scene'
import {
    DOOR,
    FIXTURE,
    FURNITURE
} from '../../../../constants/scene/things'

// Illustrator artboards are 1623 by 1082.
const
    ARTBOARD_WIDTH = 1623 / 100,
    ARTBOARD_HEIGHT = 1082 / 100,
    ACTOR_DEFAULT_SCALE_FACTOR = 0.3,
    DOOR_DEFAULT_SCALE_FACTOR = 0.7,
    FIXTURE_DEFAULT_SCALE_FACTOR = 0.3,
    FURNITURE_DEFAULT_SCALE_FACTOR = 0.25

const getPresenceScaleFactor = ({ presenceType, scaleFactor }) => {
    // Override default if custom scale factor is given.
    if (isFinite(scaleFactor)) {
        return scaleFactor
    }

    if (presenceType === ACTOR) {
        return ACTOR_DEFAULT_SCALE_FACTOR
    }

    if (presenceType === DOOR) {
        return DOOR_DEFAULT_SCALE_FACTOR
    }

    if (presenceType === FIXTURE) {
        return FIXTURE_DEFAULT_SCALE_FACTOR
    }

    if (presenceType === FURNITURE) {
        return FURNITURE_DEFAULT_SCALE_FACTOR
    }

    return 1
}

export const getSizeForPresence = ({
    presenceType,
    viewBoxWidth,
    viewBoxHeight,
    yIndex,
    scaleFactor,
    trimBottom = 0

}) => {
    const
        validYIndex = getValidYIndex(yIndex),
        presenceScaleFactor = getPresenceScaleFactor({
            presenceType,
            scaleFactor
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
