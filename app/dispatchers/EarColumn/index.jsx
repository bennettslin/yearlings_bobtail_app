// Singleton to watch for non-toggle events that require collapsing lyric.
import { forwardRef, useImperativeHandle, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEarColumnIndex } from '../../redux/session/action'
import { mapIsEarShown } from '../../redux/ear/selector'
import { mapIsSelectedLogue } from '../../redux/selected/selector'
import { mapEarColumnIndex } from '../../redux/session/selector'

const EarColumnDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isEarShown = useSelector(mapIsEarShown),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        earColumnIndex = useSelector(mapEarColumnIndex)

    const dispatchEarColumn = () => {
        /**
             * We shouldn't be able to select lyric column if not in a song that
             * has ear toggle, or if in a logue.
             */
        if (!isEarShown || isSelectedLogue) {
            return false
        }

        dispatch(updateEarColumnIndex((earColumnIndex + 1) % 2))
        return true
    }

    useImperativeHandle(ref, () => dispatchEarColumn)
    return null
})

export default memo(EarColumnDispatcher)
