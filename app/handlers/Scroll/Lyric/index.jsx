// eslint-disable-next-line object-curly-newline
import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ScrollDispatcher from '../Dispatcher'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import {
    ANCHOR_SCROLL,
    VERSE_SCROLL
} from '../../../constants/scroll'
import { mapLyricVerseIndex } from '../../../redux/lyric/selector'
import {
    mapScrollLyricLog,
    mapScrollLyricByVerse,
    mapScrollLyricIndex,
    mapScrollLyricNoDuration
} from '../../../redux/scrollLyric/selector'

const ScrollLyricListener = ({
    getLyricScrollElement,
    getScrollAnchorChild,
    getScrollVerseChild

}) => {
    const
        dispatch = useDispatch(),
        scrollElementIntoView = useRef(),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        scrollLyricLog = useSelector(mapScrollLyricLog),
        scrollLyricByVerse = useSelector(mapScrollLyricByVerse),
        scrollLyricIndex = useSelector(mapScrollLyricIndex),
        scrollLyricNoDuration = useSelector(mapScrollLyricNoDuration)

    const getScrollChild = (index, scrollClass) => (
        scrollClass === VERSE_SCROLL ?
            getScrollVerseChild(index) :
            getScrollAnchorChild(index)
    )

    useEffect(() => {
        if (scrollLyricLog) {
            scrollElementIntoView.current({
                log: scrollLyricLog,
                scrollClass: scrollLyricByVerse ?
                    VERSE_SCROLL :
                    ANCHOR_SCROLL,
                /**
                 * If no verse index given, default to selected verse. If
                 * scrolling to annotation, index is always given.
                 */
                index: scrollLyricIndex === -1 ?
                    lyricVerseIndex :
                    scrollLyricIndex,
                noDuration: scrollLyricNoDuration
            })

            dispatch(updateScrollLyricStore())
        }
    }, [scrollLyricLog])

    return (
        <ScrollDispatcher
            {...{
                ref: scrollElementIntoView,
                getScrollParent: getLyricScrollElement,
                getScrollChild
            }}
        />
    )
}

ScrollLyricListener.propTypes = {
    getLyricScrollElement: PropTypes.func.isRequired,
    getScrollAnchorChild: PropTypes.func.isRequired,
    getScrollVerseChild: PropTypes.func.isRequired
}

export default memo(ScrollLyricListener)
