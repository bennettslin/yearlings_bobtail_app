// Singleton to watch for non-toggle events that require collapsing lyric.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSelectedStore } from '../../redux/selected/action'
import { IS_EAR_SHOWN_SELECTOR } from '../../redux/transient/selectors'
import {
    IS_SELECTED_LOGUE_SELECTOR,
    EAR_COLUMN_INDEX_SELECTOR
} from '../../redux/selected/selectors'

const EarColumnDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isEarShown = useSelector(IS_EAR_SHOWN_SELECTOR),
        isSelectedLogue = useSelector(IS_SELECTED_LOGUE_SELECTOR),
        earColumnIndex = useSelector(EAR_COLUMN_INDEX_SELECTOR),
        dispatchEarColumn = () => {
            /**
             * We shouldn't be able to select lyric column if not in a song that
             * has ear toggle, or if in a logue.
             */
            if (!isEarShown || isSelectedLogue) {
                return false
            }

            dispatch(updateSelectedStore({
                earColumnIndex: (earColumnIndex + 1) % 2
            }))
            return true
        }

    useImperativeHandle(ref, () => dispatchEarColumn)
    return null
})

export default EarColumnDispatcher
