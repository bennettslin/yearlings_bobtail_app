// eslint-disable-next-line object-curly-newline
import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import ScrollDispatcher from '../Dispatcher'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { mapIsPlaying } from '../../../redux/audio/selector'
import {
    LYRIC_ANNOTATION_SCROLL,
    VERSE_SCROLL
} from '../../../constants/scroll'
import { mapLyricVerseIndex } from '../../../redux/lyric/selector'
import {
    mapScrollLyricLog,
    mapScrollLyricByVerse,
    mapScrollLyricIndex,
    mapScrollLyricAlways,
    mapScrollLyricNoDuration,
    mapScrollLyricFromAutoScroll
} from '../../../redux/scrollLyric/selector'
import {
    mapIsAutoScroll,
    mapIsLyricExpanded
} from '../../../redux/toggle/selector'
import {
    mapDeviceWidthIndex,
    mapIsHeightlessLyric
} from '../../../redux/viewport/selector'

const ScrollLyricListener = ({
    getLyricScrollElement,
    getScrollAnchorChild,
    getScrollVerseChild

}) => {
    const
        dispatch = useDispatch(),
        scrollElementIntoView = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        isHeightlessLyric = useSelector(mapIsHeightlessLyric),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        isAutoScroll = useSelector(mapIsAutoScroll),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        deviceWidthIndex = useSelector(mapDeviceWidthIndex),
        scrollLyricLog = useSelector(mapScrollLyricLog),
        scrollLyricByVerse = useSelector(mapScrollLyricByVerse),
        scrollLyricIndex = useSelector(mapScrollLyricIndex),
        scrollLyricAlways = useSelector(mapScrollLyricAlways),
        scrollLyricNoDuration = useSelector(mapScrollLyricNoDuration),
        scrollLyricFromAutoScroll = useSelector(mapScrollLyricFromAutoScroll)

    useEffect(() => {
        if (scrollLyricLog) {
            // TODO: Make this a selector
            if (
                !isHeightlessLyric ||
                isLyricExpanded ||
                // If paused, always scroll.
                !isPlaying ||

                // If selecting a new song or verse, always scroll.
                scrollLyricAlways ||

                /**
                 * If autoScroll is on, only scroll from autoScroll, or else if
                 * autoScroll is off, scroll from everything *but* autoScroll.
                 */
                scrollLyricFromAutoScroll === isAutoScroll
            ) {
                /**
                 * If no verse index given, default to selected verse. If
                 * scrolling to annotation, index is always given.
                 */
                const index = scrollLyricIndex === -1 ?
                    lyricVerseIndex :
                    scrollLyricIndex

                scrollElementIntoView.current({
                    log: scrollLyricLog,
                    scrollClass: scrollLyricByVerse ?
                        VERSE_SCROLL :
                        LYRIC_ANNOTATION_SCROLL,
                    scrollParent: getLyricScrollElement(),
                    scrollChild: scrollLyricByVerse ?
                        getScrollVerseChild(index) :
                        getScrollAnchorChild(index),
                    index,
                    noDuration: scrollLyricNoDuration,
                    deviceWidthIndex,
                    isLyricExpanded
                })
            }

            dispatch(updateScrollLyricStore())
        }
    }, [scrollLyricLog])

    return (
        <ScrollDispatcher {...{ ref: scrollElementIntoView }} />
    )
}

ScrollLyricListener.propTypes = {
    getLyricScrollElement: PropTypes.func.isRequired,
    getScrollAnchorChild: PropTypes.func.isRequired,
    getScrollVerseChild: PropTypes.func.isRequired
}

export default memo(ScrollLyricListener)
