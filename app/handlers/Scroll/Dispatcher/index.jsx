import { forwardRef, useImperativeHandle, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import scrollIntoView from 'scroll-into-view'
import { ANCHOR_SCROLL } from '../../../constants/scroll'
import { getSafeScrollChild } from '../../../helpers/scroll'
import { getMapAlignForScroll } from '../../../redux/scroll/selector'

const ScrollDispatcher = forwardRef(({
    isCarousel,
    getScrollParent,
    getScrollChild

}, ref) => {
    const alignForScroll = useSelector(getMapAlignForScroll(isCarousel))

    const scrollElementIntoView = ({
        log = '',
        scrollClass,
        index,
        noDuration,
        callback

    }) => {
        const element =
            getScrollChild(
                index,
                scrollClass
            ) ||
            getSafeScrollChild({
                log,
                scrollClass,
                index
            })

        if (element) {
            logScroll({
                isCarousel,
                isAnchor: scrollClass === ANCHOR_SCROLL,
                log: `${log} ${index}.`
            })
            scrollIntoView(element, {
                align: alignForScroll,
                time: noDuration ? 0 : 750,
                validTarget: element => element === getScrollParent(),
                maxSynchronousAlignments: 1
            }, callback)
        }
    }

    useImperativeHandle(ref, () => scrollElementIntoView)
    return null
})

ScrollDispatcher.propTypes = {
    isCarousel: PropTypes.bool,
    getScrollParent: PropTypes.func.isRequired,
    getScrollChild: PropTypes.func.isRequired
}

export default memo(ScrollDispatcher)
