import { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { scrollElementIntoView } from '../helper'
import { CAROUSEL_SCROLL } from '../../../constants/scroll'
import {
    mapScrollCarouselLog,
    mapScrollCarouselIndex,
    mapScrollCarouselNoDuration
} from '../../../redux/scrollCarousel/selector'
import { mapIsCarouselShown } from '../../../redux/toggle/selector'
import {
    mapWindowWidth,
    mapDeviceWidthIndex
} from '../../../redux/viewport/selector'

const ScrollCarouselListener = ({
    getCarouselScrollChild,
    getCarouselScrollElement

}) => {
    const
        dispatch = useDispatch(),
        isCarouselShown = useSelector(mapIsCarouselShown),
        windowWidth = useSelector(mapWindowWidth),
        deviceWidthIndex = useSelector(mapDeviceWidthIndex),
        scrollCarouselLog = useSelector(mapScrollCarouselLog),
        scrollCarouselIndex = useSelector(mapScrollCarouselIndex),
        scrollCarouselNoDuration = useSelector(mapScrollCarouselNoDuration)

    useEffect(() => {
        // Only scroll if carousel is shown.
        if (scrollCarouselLog && isCarouselShown) {
            scrollElementIntoView({
                isCarousel: true,
                log: scrollCarouselLog,
                scrollClass: CAROUSEL_SCROLL,
                scrollParent: getCarouselScrollElement(),
                scrollChild: getCarouselScrollChild(scrollCarouselIndex),
                index: scrollCarouselIndex,
                noDuration: scrollCarouselNoDuration,
                deviceWidthIndex,
                windowWidth
            })

            dispatch(updateScrollCarouselStore())
        }
    }, [scrollCarouselLog])

    return null
}

ScrollCarouselListener.propTypes = {
    getCarouselScrollChild: PropTypes.func.isRequired,
    getCarouselScrollElement: PropTypes.func.isRequired
}

export default memo(ScrollCarouselListener)
