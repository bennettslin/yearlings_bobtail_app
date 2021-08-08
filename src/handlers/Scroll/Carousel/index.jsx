import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ScrollDispatcher from '../Dispatcher'
import { resetScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { CAROUSEL_SCROLL } from '../../../constants/scroll'
import { mapAccessedAnnotationIndex } from '../../../redux/access/selector'
import { mapIsCarouselAndNavShowable } from '../../../redux/carousel/selector'
import {
    mapScrollCarouselLog,
    mapScrollCarouselIndex,
    mapScrollCarouselNoDuration,
} from '../../../redux/scrollCarousel/selector'
import { mapSelectedAnnotationIndex } from '../../../redux/selected/selector'

const ScrollCarouselListener = ({
    getCarouselScrollChild,
    getCarouselScrollElement,

}) => {
    const
        dispatch = useDispatch(),
        scrollElementIntoView = useRef(),
        accessedAnnotationIndex = useSelector(mapAccessedAnnotationIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isCarouselAndNavShowable = useSelector(mapIsCarouselAndNavShowable),
        scrollCarouselLog = useSelector(mapScrollCarouselLog),
        scrollCarouselIndex = useSelector(mapScrollCarouselIndex),
        isScrollCarouselForSongSelect = useSelector(mapScrollCarouselNoDuration)

    useEffect(() => {
        if (scrollCarouselLog && isCarouselAndNavShowable) {
            scrollElementIntoView.current({
                log: scrollCarouselLog,
                scrollClass: CAROUSEL_SCROLL,
                index: isScrollCarouselForSongSelect ?
                    (
                        selectedAnnotationIndex ||
                        accessedAnnotationIndex
                    ) :
                    scrollCarouselIndex,
                noDuration: isScrollCarouselForSongSelect,
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
                getScrollChild: getCarouselScrollChild,
            }}
        />
    )
}

ScrollCarouselListener.propTypes = {
    getCarouselScrollChild: PropTypes.func.isRequired,
    getCarouselScrollElement: PropTypes.func.isRequired,
}

export default memo(ScrollCarouselListener)
