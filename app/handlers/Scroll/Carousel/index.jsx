// eslint-disable-next-line object-curly-newline
import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ScrollDispatcher from '../Dispatcher'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'
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
        scrollElementIntoView = useRef(),
        isCarouselShown = useSelector(mapIsCarouselShown),
        windowWidth = useSelector(mapWindowWidth),
        deviceWidthIndex = useSelector(mapDeviceWidthIndex),
        scrollCarouselLog = useSelector(mapScrollCarouselLog),
        scrollCarouselIndex = useSelector(mapScrollCarouselIndex),
        scrollCarouselNoDuration = useSelector(mapScrollCarouselNoDuration)

    useEffect(() => {
        // Only scroll if carousel is shown.
        if (scrollCarouselLog && isCarouselShown) {
            scrollElementIntoView.current({
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

    return (
        <ScrollDispatcher {...{ ref: scrollElementIntoView }} />
    )
}

ScrollCarouselListener.propTypes = {
    getCarouselScrollChild: PropTypes.func.isRequired,
    getCarouselScrollElement: PropTypes.func.isRequired
}

export default memo(ScrollCarouselListener)
