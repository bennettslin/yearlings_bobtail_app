import { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { mapIsPlaying } from '../../../redux/audio/selectors'
import { scrollElementIntoView } from '../helper'
import {
    LYRIC_ANNOTATION_SCROLL,
    VERSE_SCROLL
} from '../../../constants/scroll'
import { mapLyricVerseIndex } from '../../../redux/lyric/selectors'
import {
    mapScrollLyricLog,
    mapScrollLyricByVerse,
    mapScrollLyricIndex,
    mapScrollLyricAlways,
    mapScrollLyricNoDuration,
    mapScrollLyricFromAutoScroll,
    mapQueuedSceneChangeExitScrollCallback
} from '../../../redux/scrollLyric/selectors'
import {
    mapIsAutoScroll,
    mapIsLyricExpanded
} from '../../../redux/toggle/selectors'
import {
    mapDeviceWidthIndex,
    mapIsHeightlessLyric
} from '../../../redux/viewport/selectors'

const ScrollLyricListener = ({
    getLyricScrollElement,
    getScrollAnchorChild,
    getScrollVerseChild

}) => {
    const
        dispatch = useDispatch(),
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
        scrollLyricFromAutoScroll = useSelector(mapScrollLyricFromAutoScroll),
        queuedSceneChangeExitScrollCallback = useSelector(mapQueuedSceneChangeExitScrollCallback)

    const _completeSceneChangeExit = () => {
        logTransition('Scene scroll did exit from lyric scroll.')
        dispatch(updateEntranceStore({ didSceneScrollExit: true }))
    }

    const _setTimeoutForSceneChangeExit = () => {
        // This timeout is necessary to fully complete scroll animation.
        setTimeout(_completeSceneChangeExit, 0)
    }

    useEffect(() => {
        if (scrollLyricLog) {
            // TODO: Make this a selector
            if (isHeightlessLyric && !isLyricExpanded) {
                /**
                 * Don't scroll if not expanded in heightless lyric. Just call
                 * the scene change callback right away.
                 */
                if (queuedSceneChangeExitScrollCallback) {
                    _completeSceneChangeExit()
                }

            // TODO: Make this a selector.
            } else if (
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

                scrollElementIntoView({
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
                    isLyricExpanded,
                    ...queuedSceneChangeExitScrollCallback && {
                        callback: _setTimeoutForSceneChangeExit
                    }
                })
            }

            dispatch(updateScrollLyricStore())
        }
    }, [scrollLyricLog])

    return null
}

ScrollLyricListener.propTypes = {
    getLyricScrollElement: PropTypes.func.isRequired,
    getScrollAnchorChild: PropTypes.func.isRequired,
    getScrollVerseChild: PropTypes.func.isRequired
}

export default memo(ScrollLyricListener)
