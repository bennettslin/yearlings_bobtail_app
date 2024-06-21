import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateWikiIndices } from '../../redux/selected/action'
import { mapReferenceDot } from '../../redux/dots/selector'

const WikiDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isWikiDotSelected = useSelector(mapReferenceDot)

    const dispatchWiki = (
        selectedWikiIndex,
        wikiAnnotationIndex = 0,
    ) => {
        // Don't register click if reference dot is deselected.
        if (!isWikiDotSelected) {
            return false
        }

        dispatch(updateWikiIndices({
            selectedWikiIndex,
            wikiAnnotationIndex,
        }))
        return true
    }

    useImperativeHandle(ref, () => dispatchWiki)
    return null
})

export default WikiDispatcher
