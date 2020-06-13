import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateShownNavBookIndex } from '../../../redux/session/action'
import { mapShowSingleNavBook } from '../../../redux/nav/selectors'
import { mapShownNavBookIndex } from '../../../redux/session/selectors'
import { mapIsNavShown } from '../../../redux/toggle/selectors'

const NavDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        showSingleNavBook = useSelector(mapShowSingleNavBook),
        shownNavBookIndex = useSelector(mapShownNavBookIndex),
        isNavShown = useSelector(mapIsNavShown)

    const dispatchNavBook = () => {
        /**
             * We shouldn't be able to select book column if it's not a single
             * column, or if nav is collapsed.
             */
        if (!showSingleNavBook || !isNavShown) {
            return false
        }

        // Always just a simple toggle.
        dispatch(updateShownNavBookIndex((shownNavBookIndex + 1) % 2))
        return true
    }

    useImperativeHandle(ref, () => dispatchNavBook)
    return null
})

export default NavDispatcher
