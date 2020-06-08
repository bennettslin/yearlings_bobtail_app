import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch } from 'react-redux'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import { updateToggleStore } from '../../redux/toggle/action'

const ScrollVerseDispatcher = forwardRef((props, ref) => {
    const dispatch = useDispatch()

    const dispatchScrollVerse = (isAutoScroll) => {
        dispatch(updateScrollLyricStore({
            scrollLyricLog:
                    'VerseBar click or autoScroll toggle back to selected verse.',
            scrollLyricByVerse: true,
            scrollLyricAlways: true
        }))

        dispatch(updateToggleStore({
            ...isAutoScroll && { isAutoScroll }
        }))

        return true
    }

    useImperativeHandle(ref, () => dispatchScrollVerse)
    return null
})

export default ScrollVerseDispatcher
