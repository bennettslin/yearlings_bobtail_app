import { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { scrollElementIntoView } from '../helper'
import { CAROUSEL_SCROLL } from '../../../constants/scroll'
import {
    mapQueuedScrollCarouselLog,
    mapQueuedScrollCarouselIndex,
    mapQueuedScrollCarouselNoDuration
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
        queuedScrollCarouselLog = useSelector(mapQueuedScrollCarouselLog),
        queuedScrollCarouselIndex = useSelector(mapQueuedScrollCarouselIndex),
        queuedScrollCarouselNoDuration = useSelector(mapQueuedScrollCarouselNoDuration)

    useEffect(() => {
        // Only scroll if carousel is shown.
        if (queuedScrollCarouselLog && isCarouselShown) {
            scrollElementIntoView({
                isCarousel: true,
                log: queuedScrollCarouselLog,
                scrollClass: CAROUSEL_SCROLL,
                scrollParent: getCarouselScrollParent(),
                scrollChild: getCarouselScrollChild(queuedScrollCarouselIndex),
                index: queuedScrollCarouselIndex,
                noDuration: queuedScrollCarouselNoDuration,
                deviceWidthIndex,
                windowWidth,
                isSelectedLogue
            })

            dispatch(updateScrollCarouselStore())
        }
    }, [queuedScrollCarouselLog])

    return null
}

ScrollCarouselListener.propTypes = {
    getCarouselScrollChild: PropTypes.func.isRequired,
    getCarouselScrollParent: PropTypes.func.isRequired
}

export default memo(ScrollCarouselListener)
