// eslint-disable-next-line object-curly-newline
import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import VerseDispatcher from '../../../dispatchers/Verse'
import ScrollDispatcher from '../Dispatcher'
import { resetScrollLyricStore } from '../../../redux/scrollLyric/action'
import {
    ANCHOR_SCROLL,
    VERSE_SCROLL
} from '../../../constants/scroll'
import { mapLyricVerseIndex } from '../../../redux/lyric/selector'
import {
    mapScrollLyricLog,
    mapScrollLyricByVerse,
    mapScrollLyricIndex,
    mapScrollLyricNoDuration,
    mapScrollLyricWithVerseCallback
} from '../../../redux/scrollLyric/selector'

const ScrollLyricListener = ({
    getLyricScrollElement,
    getScrollAnchorChild,
    getScrollVerseChild

}) => {
    const
        dispatch = useDispatch(),
        scrollElementIntoView = useRef(),
        dispatchVerse = useRef(),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        scrollLyricLog = useSelector(mapScrollLyricLog),
        scrollLyricByVerse = useSelector(mapScrollLyricByVerse),
        scrollLyricIndex = useSelector(mapScrollLyricIndex),
        scrollLyricNoDuration = useSelector(mapScrollLyricNoDuration),
        scrollLyricWithVerseCallback = useSelector(mapScrollLyricWithVerseCallback)

    const getScrollChild = (index, scrollClass) => (
        scrollClass === VERSE_SCROLL ?
            getScrollVerseChild(index) :
            getScrollAnchorChild(index)
    )

    const dispatchVerseCallback = index => {
        dispatchVerse.current(index)
        dispatch(resetScrollLyricStore())
    }

    useEffect(() => {
        if (scrollLyricLog) {
            const index = scrollLyricIndex === -1 ?
                lyricVerseIndex :
                scrollLyricIndex

            scrollElementIntoView.current({
                log: scrollLyricLog,
                scrollClass: scrollLyricByVerse ?
                    VERSE_SCROLL :
                    ANCHOR_SCROLL,
                /**
                 * If no verse index given, default to selected verse. If
                 * scrolling to annotation, index is always given.
                 */
                index,
                noDuration: scrollLyricNoDuration,
                ...scrollLyricWithVerseCallback && {
                    callback: () => dispatchVerseCallback(index)
                }
            })

            // If there is a callback, reset in the callback.
            if (!scrollLyricWithVerseCallback) {
                dispatch(resetScrollLyricStore())
            }
        }
    }, [scrollLyricLog])

    return (
        <>
            <ScrollDispatcher
                {...{
                    ref: scrollElementIntoView,
                    getScrollParent: getLyricScrollElement,
                    getScrollChild
                }}
            />
            <VerseDispatcher {...{ ref: dispatchVerse }} />
        </>
    )
}

ScrollLyricListener.propTypes = {
    getLyricScrollElement: PropTypes.func.isRequired,
    getScrollAnchorChild: PropTypes.func.isRequired,
    getScrollVerseChild: PropTypes.func.isRequired
}

export default memo(ScrollLyricListener)
