import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSessionStore } from '../../../redux/session/action'
import { SHOW_SINGLE_NAV_BOOK_SELECTOR } from '../../../redux/responsive/selectors'
import { SHOWN_NAV_BOOK_INDEX_SELECTOR } from '../../../redux/session/selectors'
import { IS_NAV_SHOWN_SELECTOR } from '../../../redux/toggle/selectors'

const NavDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        showSingleNavBook = useSelector(SHOW_SINGLE_NAV_BOOK_SELECTOR),
        shownNavBookIndex = useSelector(SHOWN_NAV_BOOK_INDEX_SELECTOR),
        isNavShown = useSelector(IS_NAV_SHOWN_SELECTOR),
        dispatchNavBook = () => {
            /**
             * We shouldn't be able to select book column if it's not a single
             * column, or if nav is collapsed.
             */
            if (!showSingleNavBook || !isNavShown) {
                return false
            }

            // Always just a simple toggle.
            dispatch(updateSessionStore({
                shownNavBookIndex: (shownNavBookIndex + 1) % 2
            }))
            return true
        }

    useImperativeHandle(ref, () => dispatchNavBook)
    return null
})

export default NavDispatcher
