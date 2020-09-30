import { forwardRef, useImperativeHandle, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scrollCarouselToAnnotation } from '../../redux/scrollCarousel/action'
import {
    updateIsCarouselExpanded,
    updateIsNavExpanded
} from '../../redux/toggle/action'
import { mapAccessedAnnotationIndex } from '../../redux/access/selector'
import { mapSelectedDotsBit } from '../../redux/dots/selector'
import {
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../redux/selected/selector'
import {
    mapIsCarouselExpanded,
    mapIsNavExpanded,
    mapIsDotsSlideShown
} from '../../redux/toggle/selector'
import { mapCanCarouselNavMount } from '../../redux/viewport/selector'

const CarouselNavDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        accessedAnnotationIndex = useSelector(mapAccessedAnnotationIndex),
        selectedDotsBit = useSelector(mapSelectedDotsBit),
        canCarouselNavMount = useSelector(mapCanCarouselNavMount),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        isCarouselExpanded = useSelector(mapIsCarouselExpanded),
        isNavExpanded = useSelector(mapIsNavExpanded),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown)

    const dispatchCarouselNav = (
        // If no argument passed, then just toggle by default.
        nextIsCarouselExpanded = !isCarouselExpanded

    ) => {
        /**
         * If this would otherwise show the carousel, but there are no dots
         * selected, don't show the carousel.
         */
        if (nextIsCarouselExpanded && !selectedDotsBit) {
            nextIsCarouselExpanded = false
        }

        dispatch(updateIsNavExpanded(
            selectedDotsBit ?
                // If dots are selected, toggle nav under these conditions.
                (
                    isSelectedLogue ?
                        !isNavExpanded :
                        !nextIsCarouselExpanded
                ) &&
                !isDotsSlideShown &&
                !selectedAnnotationIndex :

                // If no dots are selected, just toggle nav.
                !isNavExpanded
        ))

        if (!isSelectedLogue && canCarouselNavMount) {
            dispatch(updateIsCarouselExpanded(
                // Do not toggle carousel if no dots are selected.
                Boolean(selectedDotsBit) && nextIsCarouselExpanded
            ))

            // If showing carousel, scroll to selected or accessed annotation.
            if (nextIsCarouselExpanded) {
                dispatch(scrollCarouselToAnnotation(
                    'Toggle carousel',
                    selectedAnnotationIndex ||
                    accessedAnnotationIndex
                ))
            }
        }

        return true
    }

    useImperativeHandle(ref, () => dispatchCarouselNav)
    return null
})

export default memo(CarouselNavDispatcher)
