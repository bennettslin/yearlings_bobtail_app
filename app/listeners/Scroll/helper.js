import scrollIntoView from 'scroll-into-view'

import {
    getIsDesktopWidth,
    getIsMonitorWidth
} from 'helpers/responsive'

import {
    LS_WIDTH_GOLDEN_CORD,
    LS_WIDTH_UNCANNY_VALLEY
} from 'constants/responsive'

const _getLyricTopAlign = (deviceWidthIndex, isLyricExpanded) => {

    // If in desktop or lyric column is expanded, set closer to top.
    if (getIsDesktopWidth(deviceWidthIndex) || isLyricExpanded) {

        /**
         * This doesn't accommodate menu height with desktop processor, but
         * this is fine for now.
         */
        return { top: 0.33 }

    // Otherwise set halfway, which is the default.
    } else {
        return null
    }
}

const _getCarouselLeftAlign = (
    deviceWidthIndex,
    windowWidth
) => {

    // If mobile, then set halfway, which is the default.
    if (!getIsDesktopWidth(deviceWidthIndex)) {
        return null

    } else {
        const
            earColumnWidth =
                getIsMonitorWidth(deviceWidthIndex) ?
                    LS_WIDTH_GOLDEN_CORD :
                    LS_WIDTH_UNCANNY_VALLEY,

            centreFieldWidth = windowWidth - earColumnWidth,

            // Percentage. It would be 0.5 if not for the lyric column.
            left = (centreFieldWidth * 0.5) / windowWidth

        /**
         * Not sure why this doesn't exactly centre the annotation, but
         * whatever.
         */
        return {
            left
            // leftOffset
        }
    }
}

const _getValidTarget = (scrollParent) => {
    const parentElement = scrollParent

    return (element) => {
        const isParent = element === parentElement
        return isParent
    }
}

// TODO: Maybe just split into two helpers, one for each scroll listener?
export const scrollElementIntoView = ({
    isCarousel,
    log = '',
    scrollClass,
    scrollParent,
    scrollChildren,
    index,
    noDuration,
    deviceWidthIndex,
    windowWidth,
    isLyricExpanded,
    isSelectedLogue,
    callback
}) => {
    if (isSelectedLogue || index < 0) {
        return
    }

    const
        time = noDuration ? 0 : 500,
        scrollElement = scrollChildren[index]

    let element = scrollElement

    /**
     * TODO: This is a fallback that should never get called. Delete once
     * confident that it doesn't.
     */
    if (!element) {
        const selector =
            isNaN(index) ?
                scrollClass : `${scrollClass}__${index}`
        element = document.getElementsByClassName(selector)[0]

        logError(`${log}\nScroll by selector: ${scrollClass} ${index}`)
    }

    if (element) {
        // logScroll(`${log}\nScroll by ref: ${scrollClass} ${index}, in ${time}`)
        logScroll(log)

        const
            align = isCarousel ?
                _getCarouselLeftAlign(deviceWidthIndex, windowWidth) :
                _getLyricTopAlign(deviceWidthIndex, isLyricExpanded),

            validTarget = _getValidTarget(scrollParent)

        scrollIntoView(element, {
            time,
            align,
            validTarget
        }, callback)
    }
}

export const setChildElement = ({
    node,
    index,
    scrollElements
}) => {
    if (node) {
        scrollElements[index] = node

    } else {
        delete scrollElements[index]
    }
}
