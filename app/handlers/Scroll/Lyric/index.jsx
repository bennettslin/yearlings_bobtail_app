import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ScrollDispatcher from '../Dispatcher'
import { updateEntranceStore } from '../../../redux/entrance/action'
import { resetScrollLyricStore } from '../../../redux/scrollLyric/action'
import { mapLyricVerseIndex } from '../../../redux/lyric/selector'
import {
    mapScrollLyricLog,
    mapScrollLyricByAnchor,
    mapScrollLyricIndex,
    mapIsScrollLyricForSongSelect,
    mapIsScrollLyricForVerseSelect,
} from '../../../redux/scrollLyric/selector'
import { mapCanLyricScroll } from '../../../redux/scroll/selector'
import { SCROLL_BUFFER } from '../../../constants/entrance'
import {
    ANCHOR_SCROLL,
    VERSE_SCROLL,
} from '../../../constants/scroll'

const ScrollLyricListener = ({
    getLyricScrollElement,
    getScrollAnchorChild,
    getScrollVerseChild,

}) => {
    const
        dispatch = useDispatch(),
        scrollElementIntoView = useRef(),
        canLyricScroll = useSelector(mapCanLyricScroll),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        scrollLyricLog = useSelector(mapScrollLyricLog),
        scrollLyricByAnchor = useSelector(mapScrollLyricByAnchor),
        scrollLyricIndex = useSelector(mapScrollLyricIndex),
        isScrollLyricForSongSelect = useSelector(mapIsScrollLyricForSongSelect),
        isScrollLyricForVerseSelect = useSelector(mapIsScrollLyricForVerseSelect)

    const getScrollChild = (index, scrollClass) => (
        scrollClass === VERSE_SCROLL ?
            getScrollVerseChild(index) :
            getScrollAnchorChild(index)
    )

    const dispatchCallback = () => {
        if (isScrollLyricForVerseSelect) {
            dispatch(updateEntranceStore({ isSceneScrollComplete: true }))
        }
    }

    const dispatchScroll = () => {
        const index = scrollLyricIndex === -1 ?
            lyricVerseIndex :
            scrollLyricIndex

        scrollElementIntoView.current({
            log: scrollLyricLog,
            scrollClass: scrollLyricByAnchor ?
                ANCHOR_SCROLL :
                VERSE_SCROLL,
            /**
             * If no verse index given, default to selected verse. If
             * scrolling to annotation, index is always given.
             */
            index,
            noDuration: isScrollLyricForSongSelect,

            // Set timeout to ensure that scroll is truly complete.
            callback: () => setTimeout(
                () => dispatchCallback(index),
                SCROLL_BUFFER,
            ),
        })
    }

    useEffect(() => {
        if (scrollLyricLog && canLyricScroll) {
            /**
             * This allows some rendering to take place first, that might
             * otherwise block scroll performance. Actual duration doesn't seem
             * to matter.
             */
            setTimeout(
                dispatchScroll,
                SCROLL_BUFFER,
            )
        }
        dispatch(resetScrollLyricStore())
    }, [scrollLyricLog])

    return (
        <ScrollDispatcher
            {...{
                ref: scrollElementIntoView,
                getScrollParent: getLyricScrollElement,
                getScrollChild,
            }}
        />
    )
}

ScrollLyricListener.propTypes = {
    getLyricScrollElement: PropTypes.func.isRequired,
    getScrollAnchorChild: PropTypes.func.isRequired,
    getScrollVerseChild: PropTypes.func.isRequired,
}

export default memo(ScrollLyricListener)
