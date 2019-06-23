import isFinite from 'lodash.isfinite'

// Illustrator artboards are 1623 by 1082.
const
    ARTBOARD_WIDTH = 1623,
    ARTBOARD_HEIGHT = 1082

export const getAdjustedSize = ({
    viewBoxWidth,
    viewBoxHeight,
    scaleFactor
}) => {
    const
        adjustedWidth = viewBoxWidth * scaleFactor / ARTBOARD_WIDTH * 100,
        adjustedHeight = viewBoxHeight * scaleFactor / ARTBOARD_HEIGHT * 100

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
