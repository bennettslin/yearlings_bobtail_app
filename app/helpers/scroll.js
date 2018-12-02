import scrollIntoView from 'scroll-into-view'

import {
    getIsDesktop,
    getIsMonitor
} from './responsiveHelper'

import {
    LS_WIDTH_GOLDEN_CORD,
    LS_WIDTH_UNCANNY_VALLEY
} from '../constants/responsive'

const _getLyricTopAlign = (deviceIndex, isLyricExpanded) => {

    // If in desktop or lyric column is expanded, set closer to top.
    if (getIsDesktop(deviceIndex) || isLyricExpanded) {
        return {
            top: 0.33
        }

    // Otherwise set halfway, which is the default.
    } else {
        return null
    }
}

const _getCarouselLeftAlign = (
    deviceIndex,
    windowWidth
) => {

    // If mobile, then set halfway, which is the default.
    if (!getIsDesktop(deviceIndex)) {
        return null

    } else {
        const
            earColumnWidth =
                getIsMonitor(deviceIndex) ?
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

        if (isParent) {
            logger.info('Scroll parent:', element)
        }

        return isParent
    }
}

const scrollElementIntoView = ({
    isCarousel,
    log = '',
    scrollClass,
    scrollParent,
    scrollChildren,
    index,
    doScrollImmediately,
    deviceIndex,
    windowWidth,
    isLyricExpanded,
    isSelectedLogue,
    callback
}) => {
    if (isSelectedLogue || index < 0) {
        return
    }

    const
        time = doScrollImmediately ? 0 : 500,
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

        logger.error(log, '\nScroll by selector:', scrollClass, index)
    }

    if (element) {
        logger.info(log, '\nScroll by ref:', scrollClass, index, '\nWith time:', time)

        const
            align = isCarousel ?
                _getCarouselLeftAlign(deviceIndex, windowWidth) :
                _getLyricTopAlign(deviceIndex, isLyricExpanded),

            validTarget = _getValidTarget(scrollParent)

        scrollIntoView(element, {
            time,
            align,
            validTarget
        }, callback)
    }
}

const setChildElement = ({
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

export {
    scrollElementIntoView,
    setChildElement
}
