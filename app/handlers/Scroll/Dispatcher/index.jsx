import { forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import scrollIntoView from 'scroll-into-view'
import { getDocument } from '../../../utils/browser'
import { getMapAlignForScroll } from '../../../redux/scroll/selector'

const ScrollDispatcher = forwardRef(({
    isCarousel,
    getScrollParent

}, ref) => {
    const alignForScroll = useSelector(getMapAlignForScroll(isCarousel))

    const scrollElementIntoView = ({
        log = '',
        scrollClass,
        scrollChild,
        index,
        noDuration,
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
            scrollIntoView(element, {
                align: alignForScroll,
                time: noDuration ? 0 : 500,
                validTarget: element => element === getScrollParent()
            }, callback)
        }
    }

    useImperativeHandle(ref, () => scrollElementIntoView)
    return null
})

ScrollDispatcher.propTypes = {
    isCarousel: PropTypes.bool,
    getScrollParent: PropTypes.func.isRequired
}

export default ScrollDispatcher
