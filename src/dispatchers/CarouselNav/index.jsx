import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scrollCarouselToAnnotation } from '../../redux/scrollCarousel/action'
import {
    updateIsCarouselExpanded,
    updateIsNavExpanded,
} from '../../redux/toggle/action'
import { mapAccessedAnnotationIndex } from '../../redux/access/selector'
import { mapIsCarouselNotPossible } from '../../redux/carousel/selector'
import { mapIsAnnotationShown, mapSelectedAnnotationIndex } from '../../redux/selected/selector'
import {
    mapIsCarouselExpanded,
    mapIsNavExpanded,
} from '../../redux/toggle/selector'
import { mapCanCarouselNavMount } from '../../redux/viewport/selector'

const CarouselNavDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        accessedAnnotationIndex = useSelector(mapAccessedAnnotationIndex),
        isCarouselNotPossible = useSelector(mapIsCarouselNotPossible),
        canCarouselNavMount = useSelector(mapCanCarouselNavMount),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isAnnotationShown = useSelector(mapIsAnnotationShown),
        isCarouselExpanded = useSelector(mapIsCarouselExpanded),
        isNavExpanded = useSelector(mapIsNavExpanded)

    const dispatchCarouselNav = () => {
        if (!canCarouselNavMount) {
            return false
        }

        // If carousel is possible and not expanded, expand carousel.
        if (!isCarouselNotPossible && !isCarouselExpanded) {
            dispatch(updateIsCarouselExpanded(true))
            dispatch(updateIsNavExpanded(false))

            // Also scroll to selected or accessed annotation.
            dispatch(scrollCarouselToAnnotation(
                'Toggle carousel',
                selectedAnnotationIndex ||
                accessedAnnotationIndex,
            ))

        /**
         * If no annotation is selected, and carousel is either expanded or not
         * possible, then toggle nav.
         */
        } else if (
            !isAnnotationShown && (
                isCarouselNotPossible ||
                isCarouselExpanded
            )
        ) {
            dispatch(updateIsNavExpanded(!isNavExpanded))
            dispatch(updateIsCarouselExpanded(false))

        // Otherwise, just toggle between carousel and annotation popup.
        } else {
            dispatch(updateIsCarouselExpanded(!isCarouselExpanded))
        }

        return true
    }

    useImperativeHandle(ref, () => dispatchCarouselNav)
    return null
})

export default CarouselNavDispatcher
