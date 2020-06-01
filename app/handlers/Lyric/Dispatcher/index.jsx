// Child that knows rules to toggle lyric. Not needed if just collapsing.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateToggleStore } from '../../../redux/toggle/action'
import { IS_LYRIC_EXPANDABLE_SELECTOR } from '../../../redux/responsive/selectors'
import { IS_SELECTED_LOGUE_SELECTOR } from '../../../redux/selected/selectors'
import { IS_LYRIC_EXPANDED_SELECTOR } from '../../../redux/toggle/selectors'

const LyricDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isLyricExpandable = useSelector(IS_LYRIC_EXPANDABLE_SELECTOR),
        isSelectedLogue = useSelector(IS_SELECTED_LOGUE_SELECTOR),
        isLyricExpanded = useSelector(IS_LYRIC_EXPANDED_SELECTOR),
        dispatchLyricExpand = (
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
