import isFinite from '../../utils/lodash/isfinite'
import scrollIntoView from 'scroll-into-view'

import {
    getIsDesktopWidth,
    getIsMonitorWidth
} from '../../helpers/responsive'

import {
    CSS_WIDTH_GOLDEN_CORD,
    CSS_WIDTH_UNCANNY_VALLEY
} from '../../constants/responsive/deviceWidth'

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
                    CSS_WIDTH_GOLDEN_CORD :
                    CSS_WIDTH_UNCANNY_VALLEY,

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

    if (!element) {
        /**
         * This is a fallback. As long as all refs have been set, it should
         * never get called. Unfortunately, it does happen, though rarely.
         */
        const selector =
            !isFinite(index) ?
                scrollClass :
                `${scrollClass}__${index}`
        element = document.getElementsByClassName(selector)[0]

        logError({
            log: `${log}\nNo ref found, scrolled by selector: ${scrollClass} ${index}`,
            action: 'scroll',
            label: `class: ${scrollClass}, index: ${index}`
        })
    }

    if (element) {
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
