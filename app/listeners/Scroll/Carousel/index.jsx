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
} from '../../../redux/scrollCarousel/selectors'
import { mapIsSelectedLogue } from '../../../redux/selected/selectors'
import { mapIsCarouselShown } from '../../../redux/toggle/selectors'
import {
    mapWindowWidth,
    mapDeviceWidthIndex
} from '../../../redux/viewport/selectors'

const ScrollCarouselListener = ({
    getCarouselScrollChild,
    getCarouselScrollParent

}) => {
    const
        dispatch = useDispatch(),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
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
                scrollParent: getCarouselScrollParent(),
                scrollChild: getCarouselScrollChild(scrollCarouselIndex),
                index: scrollCarouselIndex,
                noDuration: scrollCarouselNoDuration,
                deviceWidthIndex,
                windowWidth,
                isSelectedLogue
            })

            dispatch(updateScrollCarouselStore())
        }
    }, [scrollCarouselLog])

    return null
}

ScrollCarouselListener.propTypes = {
    getCarouselScrollChild: PropTypes.func.isRequired,
    getCarouselScrollParent: PropTypes.func.isRequired
}

export default memo(ScrollCarouselListener)
