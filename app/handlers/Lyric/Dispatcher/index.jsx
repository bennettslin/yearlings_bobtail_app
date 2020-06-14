// Child that knows rules to toggle lyric. Not needed if just collapsing.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateToggleStore } from '../../../redux/toggle/action'
import { mapIsLyricExpandable } from '../../../redux/lyricExpand/selector'
import { mapIsSelectedLogue } from '../../../redux/selected/selector'
import { mapIsLyricExpanded } from '../../../redux/toggle/selector'

const LyricDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isLyricExpandable = useSelector(mapIsLyricExpandable),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        isLyricExpanded = useSelector(mapIsLyricExpanded)

    const dispatchLyricExpand = (
        // Just toggle unless parent specifies value.
        attemptedIsLyricExpanded = !isLyricExpanded
    ) => {
        // Turning off is always successful.
        const nextIsLyricExpanded = attemptedIsLyricExpanded &&

                // If trying to turn on, lyric must be expandable, and...
                isLyricExpandable &&

                // ... also must not be in logue.
                !isSelectedLogue

        dispatch(updateToggleStore({
            isLyricExpanded: nextIsLyricExpanded
        }))

        // Try was successful.
        return nextIsLyricExpanded === attemptedIsLyricExpanded
    }

    useImperativeHandle(ref, () => dispatchLyricExpand)
    return null
})

export default LyricDispatcher
