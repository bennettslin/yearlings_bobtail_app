import { forwardRef, useImperativeHandle, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateShownNavBookIndex } from '../../../redux/session/action'
import { mapShowSingleNavBook } from '../../../redux/nav/selector'
import { mapShownNavBookIndex } from '../../../redux/session/selector'
import { mapIsNavExpanded } from '../../../redux/toggle/selector'

const NavDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        showSingleNavBook = useSelector(mapShowSingleNavBook),
        shownNavBookIndex = useSelector(mapShownNavBookIndex),
        isNavExpanded = useSelector(mapIsNavExpanded)

    const dispatchNavBook = () => {
        /**
             * We shouldn't be able to select book column if it's not a single
             * column, or if nav is collapsed.
             */
        if (!showSingleNavBook || !isNavExpanded) {
            return false
        }

        // Always just a simple toggle.
        dispatch(updateShownNavBookIndex((shownNavBookIndex + 1) % 2))
        return true
    }

    useImperativeHandle(ref, () => dispatchNavBook)
    return null
})

export default memo(NavDispatcher)
