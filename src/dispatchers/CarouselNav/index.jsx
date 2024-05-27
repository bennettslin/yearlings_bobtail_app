import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scrollCarouselToAnnotation } from '../../redux/scrollCarousel/action'
import {
    updateIsCarouselExpanded,
    updateIsNavExpanded,
} from '../../redux/toggle/action'
import { mapAccessedAnnotationIndex } from '../../redux/access/selector'
import { mapIsCarouselNotShowable } from '../../redux/carousel/selector'
import { mapSelectedAnnotationIndex } from '../../redux/selected/selector'
import {
    mapIsCarouselExpanded,
    mapIsNavExpanded,
} from '../../redux/toggle/selector'
import { mapCanCarouselNavMount } from '../../redux/viewport/selector'

const CarouselNavDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        accessedAnnotationIndex = useSelector(mapAccessedAnnotationIndex),
        isCarouselNotShowable = useSelector(mapIsCarouselNotShowable),
        canCarouselNavMount = useSelector(mapCanCarouselNavMount),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isCarouselExpanded = useSelector(mapIsCarouselExpanded),
        isNavExpanded = useSelector(mapIsNavExpanded)

    const dispatchCarouselNav = fromAnnotation => {
        if (!canCarouselNavMount) {
            return
        }

        /**
         * If carousel is showable and neither carousel nor nav is expanded,
         * expand carousel.
         */
        if (!isCarouselNotShowable && !isCarouselExpanded && !isNavExpanded) {
            dispatch(updateIsCarouselExpanded(true))

            // Also scroll to selected or accessed annotation.
            dispatch(scrollCarouselToAnnotation(
                'Toggle carousel',
                selectedAnnotationIndex ||
                accessedAnnotationIndex,
            ))

        /**
         * If carousel is expanded and we're toggling the selected annotation,
         * then show the selected annotation as a popup.
         */
        } else if (fromAnnotation && isCarouselExpanded) {
            dispatch(updateIsCarouselExpanded(false))

        /**
         * Otherwise, just toggle nav. Carousel will not show when nav is
         * expanded.
         */
        } else {
            dispatch(updateIsNavExpanded(!isNavExpanded))
        }

        return true
    }

    useImperativeHandle(ref, () => dispatchCarouselNav)
    return null
})

export default CarouselNavDispatcher
