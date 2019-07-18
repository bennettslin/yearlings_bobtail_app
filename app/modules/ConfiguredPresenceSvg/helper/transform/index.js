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

export const getTransformStyleForPresence = ({
    alignLeft,
    alignRight,
    flipHorizontal,
    rotate
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

    if (
        /**
         * Default translate is already set in CSS, so only add here if we are
         * adding custom transforms or a custom alignment.
         */
        transformStyles.length ||
        (alignLeft || alignRight)
    ) {
        const translateStyle = getTranslateStyle({ alignLeft, alignRight })
        transformStyles.unshift(translateStyle)
        return transformStyles.join(' ')

    } else {
        return null
    }
}
