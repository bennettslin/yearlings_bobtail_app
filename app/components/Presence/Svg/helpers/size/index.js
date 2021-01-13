import { getValidYIndex } from '../../../../../helpers/cubeIndices'
import { Y_INDEX_SCALE_FACTORS } from '../../../../../constants/cubeRender'
import {
    ACTOR_DEFAULT_SCALE_FACTOR,
    ILLUSTRATOR_SCALE_FACTOR,
} from '../../../../../constants/scene'
import { STAGE_ASPECT_RATIO } from '../../../../../constants/stage'
import {
    YOUNG_BENNETT,
    PRETEEN_BENNETT,
    BENNETT,
    BENNETT_FATHER,
    BENNETT_LIZ,
    BENNETT_STEPHANIE,
    OLD_BENNETT,
    ANITA,
    ANITA_BENNETT,
    ESTHER,
    ESTHER_MOTHER,
    WILLY,
    MOTHER,
    FATHER,
    SASHA,
    SASHA_BENNETT,
    BRAD,
    BRAD_BENNETT,
    BRAD_SASHA,
    ANDREW,
    CATHERINE,
    MARA,
    JACOB,
    JACOB_MARA,
    ANA,
    ANA_HOWIE,
    HOWIE,
    HOWIE_WILLY,
    TOMER,
    LIZ,
    KHARI,
    KHARI_LIZ,
    MIRIAM,
    MIRIAM_BENNETT,
    MIRIAM_STEPHANIE,
    MIRIAM_TRISTAN,
    TRISTAN,
    NESTOR,
    AMY,
    AMY_STEPHANIE,
    AMY_NESTOR_TOMER,
    STEPHANIE,
    WADE,
    BENNETT_REFLECTION,
    BENNETT_LIZ_REFLECTION,
    LIZ_REFLECTION,
    KHARI_LIZ_REFLECTION,
} from '../../../../../constants/scene/actors'

const getPresenceScaleFactor = ({
    actorKey,
    scaleFactor,

}) => {
    // TODO: Get rid of this method once all actors have had scale factors adjusted.
    if (
        actorKey === YOUNG_BENNETT ||
        actorKey === PRETEEN_BENNETT ||
        actorKey === BENNETT_FATHER ||
        actorKey === BENNETT_LIZ ||
        actorKey === BENNETT_STEPHANIE ||
        actorKey === OLD_BENNETT ||
        actorKey === ANITA ||
        actorKey === ANITA_BENNETT ||
        actorKey === ESTHER ||
        actorKey === ESTHER_MOTHER ||
        actorKey === WILLY ||
        actorKey === MOTHER ||
        actorKey === FATHER ||
        actorKey === SASHA ||
        actorKey === SASHA_BENNETT ||
        actorKey === BRAD ||
        actorKey === BRAD_BENNETT ||
        actorKey === BRAD_SASHA ||
        actorKey === ANDREW ||
        actorKey === CATHERINE ||
        actorKey === MARA ||
        actorKey === JACOB ||
        actorKey === JACOB_MARA ||
        actorKey === ANA ||
        actorKey === ANA_HOWIE ||
        actorKey === HOWIE ||
        actorKey === HOWIE_WILLY ||
        actorKey === TOMER ||
        actorKey === LIZ ||
        actorKey === KHARI ||
        actorKey === KHARI_LIZ ||
        actorKey === MIRIAM ||
        actorKey === MIRIAM_BENNETT ||
        actorKey === MIRIAM_STEPHANIE ||
        actorKey === MIRIAM_TRISTAN ||
        actorKey === TRISTAN ||
        actorKey === NESTOR ||
        actorKey === AMY ||
        actorKey === AMY_STEPHANIE ||
        actorKey === AMY_NESTOR_TOMER ||
        actorKey === STEPHANIE ||
        actorKey === WADE ||
        actorKey === BENNETT_REFLECTION ||
        actorKey === BENNETT_LIZ_REFLECTION ||
        actorKey === LIZ_REFLECTION ||
        actorKey === KHARI_LIZ_REFLECTION ||
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
