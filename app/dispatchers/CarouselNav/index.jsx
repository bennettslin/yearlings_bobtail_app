import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateScrollCarouselStore } from '../../redux/scrollCarousel/action'
import { updateToggleStore } from '../../redux/toggle/action'
import { mapAccessedAnnotationIndex } from '../../redux/access/selectors'
import { mapSelectedDotsBit } from '../../redux/dots/selectors'
import {
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../redux/selected/selectors'
import {
    mapIsCarouselShown,
    mapIsNavShown,
    mapIsDotsSlideShown
} from '../../redux/toggle/selectors'
import { mapCanCarouselMount } from '../../redux/viewport/selectors'

const CarouselNavDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        accessedAnnotationIndex = useSelector(mapAccessedAnnotationIndex),
        selectedDotsBit = useSelector(mapSelectedDotsBit),
        canCarouselMount = useSelector(mapCanCarouselMount),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        isCarouselShown = useSelector(mapIsCarouselShown),
        isNavShown = useSelector(mapIsNavShown),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown)

    const dispatchCarouselNav = (
        // If no argument passed, then just toggle by default.
        nextIsCarouselShown = !isCarouselShown
    ) => {
        // We shouldn't be able to toggle the carousel under these conditions.
        if (
            isSelectedLogue ||
            !canCarouselMount
        ) {
            return false
        }

        /**
         * If this would otherwise show the carousel, but there are no dots
         * selected, don't show the carousel.
         */
        if (nextIsCarouselShown && !selectedDotsBit) {
            nextIsCarouselShown = false
        }

        dispatch(updateToggleStore({
            // Do not toggle carousel if no dots are selected.
            ...Boolean(selectedDotsBit) && {
                isCarouselShown: nextIsCarouselShown
            },

            isNavShown:
            selectedDotsBit ?
                // If dots are selected, toggle nav under these conditions.
                !nextIsCarouselShown &&
                !isDotsSlideShown &&
                !selectedAnnotationIndex :

                // If no dots are selected, just toggle nav.
                !isNavShown
        }))

        // If showing carousel, scroll to selected or accessed annotation.
        if (nextIsCarouselShown) {
            const annotationIndex =
                selectedAnnotationIndex || accessedAnnotationIndex

            dispatch(updateScrollCarouselStore({
                scrollCarouselLog: 'Nav toggled carousel annotation.',
                scrollCarouselIndex: annotationIndex
            }))
        }

        return true
    }

    useImperativeHandle(ref, () => dispatchCarouselNav)
    return null
})

export default CarouselNavDispatcher
