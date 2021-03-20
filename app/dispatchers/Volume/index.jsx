import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateWikiIndices } from '../../redux/session/action'
import { mapReferenceDot } from '../../redux/dots/selector'

const VolumeDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isWikiDotSelected = useSelector(mapReferenceDot)

    const dispatchVolume = (
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

    useImperativeHandle(ref, () => dispatchVolume)
    return null
})

export default VolumeDispatcher
