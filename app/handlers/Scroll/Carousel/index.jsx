import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ScrollDispatcher from '../Dispatcher'
import { resetScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { CAROUSEL_SCROLL } from '../../../constants/scroll'
import { mapCanCarouselScroll } from '../../../redux/scroll/selector'
import {
    mapScrollCarouselLog,
    mapScrollCarouselIndex,
    mapScrollCarouselNoDuration
} from '../../../redux/scrollCarousel/selector'

const ScrollCarouselListener = ({
    getCarouselScrollChild,
    getCarouselScrollElement

}) => {
    const
        dispatch = useDispatch(),
        scrollElementIntoView = useRef(),
        canCarouselScroll = useSelector(mapCanCarouselScroll),
        scrollCarouselLog = useSelector(mapScrollCarouselLog),
        scrollCarouselIndex = useSelector(mapScrollCarouselIndex),
        scrollCarouselNoDuration = useSelector(mapScrollCarouselNoDuration)

    useEffect(() => {
        if (scrollCarouselLog && canCarouselScroll) {
            scrollElementIntoView.current({
                log: scrollCarouselLog,
                scrollClass: CAROUSEL_SCROLL,
                index: scrollCarouselIndex,
                noDuration: scrollCarouselNoDuration
            })
        }
        dispatch(resetScrollCarouselStore())
    }, [scrollCarouselLog])

    return (
        <ScrollDispatcher
            isCarousel
            {...{
                ref: scrollElementIntoView,
                getScrollParent: getCarouselScrollElement,
                getScrollChild: getCarouselScrollChild
            }}
        />
    )
}

ScrollCarouselListener.propTypes = {
    getCarouselScrollChild: PropTypes.func.isRequired,
    getCarouselScrollElement: PropTypes.func.isRequired
}

export default memo(ScrollCarouselListener)
