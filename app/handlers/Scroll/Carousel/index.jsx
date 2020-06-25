// eslint-disable-next-line object-curly-newline
import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ScrollDispatcher from '../Dispatcher'
import { resetScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { CAROUSEL_SCROLL } from '../../../constants/scroll'
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
        scrollCarouselLog = useSelector(mapScrollCarouselLog),
        scrollCarouselIndex = useSelector(mapScrollCarouselIndex),
        scrollCarouselNoDuration = useSelector(mapScrollCarouselNoDuration)

    useEffect(() => {
        if (scrollCarouselLog) {
            scrollElementIntoView.current({
                log: scrollCarouselLog,
                scrollClass: CAROUSEL_SCROLL,
                index: scrollCarouselIndex,
                noDuration: scrollCarouselNoDuration
            })

            dispatch(resetScrollCarouselStore())
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
