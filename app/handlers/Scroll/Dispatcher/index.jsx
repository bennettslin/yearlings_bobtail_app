import { forwardRef, useImperativeHandle } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import scrollIntoView from 'scroll-into-view'

import {
    getIsDesktopWidth,
    getIsMonitorWidth
} from '../../../helpers/responsive'
import { getDocument } from '../../../utils/browser'

import {
    CSS_WIDTH_GOLDEN_CORD,
    CSS_WIDTH_UNCANNY_VALLEY
} from '../../../constants/responsive/deviceWidth'

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
        return { left }
    }
}

const ScrollDispatcher = forwardRef((props, ref) => {
    const scrollElementIntoView = ({
        isCarousel,
        log = '',
        scrollClass,
        scrollParent,
        scrollChild,
        index,
        noDuration,
        deviceWidthIndex,
        windowWidth,
        isLyricExpanded,
        callback

    }) => {
        let element = scrollChild

        if (!element) {
            /**
             * This is a fallback. As long as all refs have been set, it should
             * never get called. Unfortunately, it does happen, though rarely.
             */
            const selector =
                !Number.isFinite(index) ?
                    scrollClass :
                    `${scrollClass}__${index}`
            element = getDocument().getElementsByClassName(selector)[0]

            logError({
                log: `${log}\nNo ref found, scrolled by selector: ${selector}`,
                action: 'scroll',
                label: `class: ${scrollClass}, index: ${index}`
            })
        }

        if (element) {
            logScroll(log)

            const
                // TODO: Make this a selector.
                align = isCarousel ?
                    _getCarouselLeftAlign(deviceWidthIndex, windowWidth) :
                    _getLyricTopAlign(deviceWidthIndex, isLyricExpanded)

            scrollIntoView(element, {
                align,
                time: noDuration ? 0 : 500,
                validTarget: element => element === scrollParent
            }, callback)
        }
    }

    useImperativeHandle(ref, () => scrollElementIntoView)
    return null
})

export default ScrollDispatcher
