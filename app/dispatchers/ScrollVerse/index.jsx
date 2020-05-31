import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch } from 'react-redux'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import { updateToggleStore } from '../../redux/toggle/action'

const ScrollVerseDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dispatchScrollVerse = (isAutoScroll) => {

            dispatch(updateScrollLyricStore({
                queuedScrollLyricLog:
                    'VerseBar click or autoScroll toggle back to selected verse.',
                queuedScrollLyricByVerse: true,
                queuedScrollLyricAlways: true
            }))

            dispatch(updateToggleStore({
                ...isAutoScroll && { isAutoScroll }
            }))
        }

    useImperativeHandle(ref, () => dispatchScrollVerse)
    return null
})

export default ScrollVerseDispatcher
