const
    SCALE_STYLE = 'scaleX(-1)',
    DEFAULT_TRANSLATE_X = 50

const _getTranslateStyle = ({ alignLeft, alignRight }) => {
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

export const getPresenceTransform = ({
    alignLeft,
    alignRight
}) => {
    if (alignLeft || alignRight) {
        return _getTranslateStyle({ alignLeft, alignRight })

    } else {
        return null
    }
}

const _getSvgTransformForPresence = ({
    flipHorizontal,
    rotate,
    skewX,
    skewY,
    rotateX,
    rotateY
}) => {
    /**
     * Operation order is right to left. Translate should be last.
     */
    const transformStyles = []

    if (flipHorizontal) {
        transformStyles.push(SCALE_STYLE)
    }

    if (rotate) {
        transformStyles.push(`rotate(${rotate}deg)`)
    }

    if (skewX && skewY) {
        transformStyles.push(`skew(${skewX}deg, ${skewY}deg)`)
    } else if (skewX) {
        transformStyles.push(`skewX(${skewX}deg)`)
    } else if (skewY) {
        transformStyles.push(`skewY(${skewY}deg)`)
    }

    // These are 3d transforms.
    if (rotateX) {
        transformStyles.push(`rotateX(${rotateX}deg)`)
    }
    if (rotateY) {
        transformStyles.push(`rotateY(${rotateY}deg)`)
    }

    if (transformStyles.length) {
        return transformStyles.join(' ')

    } else {
        return null
    }
}

export const setSvgTransform = ({
    svgString,
    flipHorizontal,
    rotate,
    skewX,
    skewY,
    rotateX,
    rotateY

}) => {
    const transformStyle = _getSvgTransformForPresence({
        flipHorizontal,
        rotate,
        skewX,
        skewY,
        rotateX,
        rotateY
    })

    if (!transformStyle) {
        return svgString
    }

    const startIndex = svgString.indexOf('xmlns'),
        transformAttribute = `style="transform: ${transformStyle}" `

    return [
        svgString.slice(0, startIndex),
        transformAttribute,
        svgString.slice(startIndex)
    ].join('')
}
