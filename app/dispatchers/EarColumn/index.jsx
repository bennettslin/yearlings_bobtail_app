// Singleton to watch for non-toggle events that require collapsing lyric.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSelectedStore } from '../../redux/selected/action'
import { mapIsEarShown } from '../../redux/transient/selectors'
import {
    mapIsSelectedLogue,
    mapEarColumnIndex
} from '../../redux/selected/selectors'

const EarColumnDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isEarShown = useSelector(mapIsEarShown),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        earColumnIndex = useSelector(mapEarColumnIndex),
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
