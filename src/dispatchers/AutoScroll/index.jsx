// Child that knows rules to handle lyric wheel.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsAutoScroll } from '../../redux/toggle/action'
import { mapIsAutoScroll } from '../../redux/toggle/selector'

const AutoScrollDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isAutoScroll = useSelector(mapIsAutoScroll)

    const determineAutoScroll = (e, lyricElement) => {
        // If autoScroll is already off, don't bother.
        if (!isAutoScroll) {
            return
        }

        let hasRoomToScroll = false

        const {
                deltaY = 0,
                type,
            } = e,
            isTouchMoveEvent = type !== 'wheel',
            { scrollTop } = lyricElement

        // Only wheel event has deltaY.
        if (deltaY > 0 || isTouchMoveEvent) {
            const {
                scrollHeight,
                clientHeight,
            } = lyricElement

            if (scrollTop < scrollHeight - clientHeight) {
                hasRoomToScroll = true
            }

            /**
             * TODO: I no longer understand this code. Why should a negative
             * deltaY make any difference?
             */
        } else if (deltaY < 0) {
            if (scrollTop) {
                hasRoomToScroll = true
            }
        }

        if (
            hasRoomToScroll &&

                /**
                 * Select manual scroll only if wheel moved far enough, or
                 * if it's a scroll event.
                 */
                (deltaY > 1 || deltaY < -1 || isTouchMoveEvent)
        ) {
            dispatch(updateIsAutoScroll())
        }
    }

    useImperativeHandle(ref, () => determineAutoScroll)
    return null
})

export default AutoScrollDispatcher
