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

const
    SCALE_STYLE = 'scaleX(-1)',
    DEFAULT_TRANSLATE_X = 50

const getTranslateStyle = ({ alignLeft, alignRight }) => {
    let translateX

    if (alignLeft) {
        translateX = 0
    } else if (alignRight) {
        translateX = 100
    } else {
        translateX = DEFAULT_TRANSLATE_X
    }

    return `translate(-${translateX}%, -100%)`
}

export const getTransformStyle = ({
    alignLeft,
    alignRight,
    flipHorizontal,
    rotate
}) => {
    const transformStyles = []

    if (flipHorizontal) {
        transformStyles.push(SCALE_STYLE)
    }

    if (rotate) {
        // TODO: Use matrix instead?
        transformStyles.push(`rotate(${rotate}deg)`)
    }

    if (
        /**
         * Default translate is already set in CSS, so only add here if we are
         * adding custom transforms or a custom alignment.
         */
        transformStyles.length ||
        (alignLeft || alignRight)
    ) {
        const translateStyle = getTranslateStyle({ alignLeft, alignRight })
        transformStyles.push(translateStyle)
        return transformStyles.join(' ')

    } else {
        return null
    }
}
