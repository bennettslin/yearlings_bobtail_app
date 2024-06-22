import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch } from 'react-redux'
import { updateWikiIndices } from '../../redux/selected/action'

const WikiDispatcher = forwardRef((props, ref) => {
    const dispatch = useDispatch()

    const dispatchWiki = (
        selectedWikiIndex,
        wikiAnnotationIndex = 0,
    ) => {
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
