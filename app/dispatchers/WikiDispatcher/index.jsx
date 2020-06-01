import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSessionStore } from '../../redux/session/action'
import { mapReferenceDot } from '../../redux/dots/selectors'

const WikiDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isWikiDotSelected = useSelector(mapReferenceDot),
        dispatchWiki = (
            selectedWikiIndex,
            carouselAnnotationIndex = 0
        ) => {
            // Don't register click if reference dot is deselected.
            if (!isWikiDotSelected) {
                return false
            }

            dispatch(updateSessionStore({
                selectedWikiIndex,
                carouselAnnotationIndex
            }))
            return true
        }

    useImperativeHandle(ref, () => dispatchWiki)
    return null
})

export default WikiDispatcher
