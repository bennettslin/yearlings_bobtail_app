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

const ScrollCarouselListener = ({
    getCarouselScrollChild,
    getCarouselScrollElement

}) => {
    const
        dispatch = useDispatch(),
        scrollElementIntoView = useRef(),
        isCarouselShown = useSelector(mapIsCarouselShown),
        scrollCarouselLog = useSelector(mapScrollCarouselLog),
        scrollCarouselIndex = useSelector(mapScrollCarouselIndex),
        scrollCarouselNoDuration = useSelector(mapScrollCarouselNoDuration)

    useEffect(() => {
        // Only scroll if carousel is shown.
        if (scrollCarouselLog && isCarouselShown) {
            scrollElementIntoView.current({
                log: scrollCarouselLog,
                scrollClass: CAROUSEL_SCROLL,
                index: scrollCarouselIndex,
                noDuration: scrollCarouselNoDuration
            })

            dispatch(updateScrollCarouselStore())
        }
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
