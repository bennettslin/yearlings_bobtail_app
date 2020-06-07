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
import { mapIsHeightlessLyric } from '../../../redux/responsive/selectors'
import {
    mapQueuedScrollLyricLog,
    mapQueuedScrollLyricByVerse,
    mapQueuedScrollLyricIndex,
    mapQueuedScrollLyricAlways,
    mapQueuedScrollLyricNoDuration,
    mapQueuedScrollLyricFromAutoScroll,
    mapQueuedSceneChangeExitScrollCallback
} from '../../../redux/scrollLyric/selectors'
import {
    mapSelectedVerseIndex,
    mapIsSelectedLogue
} from '../../../redux/selected/selectors'
import {
    mapIsAutoScroll,
    mapIsLyricExpanded
} from '../../../redux/toggle/selectors'
import { mapDeviceWidthIndex } from '../../../redux/viewport/selectors'

const ScrollLyricListener = ({
    getLyricScrollParent,
    getScrollAnnotationChild,
    getScrollVerseChild

}) => {
    const
        dispatch = useDispatch(),
        isPlaying = useSelector(mapIsPlaying),
        isHeightlessLyric = useSelector(mapIsHeightlessLyric),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        isAutoScroll = useSelector(mapIsAutoScroll),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        deviceWidthIndex = useSelector(mapDeviceWidthIndex),
        queuedScrollLyricLog = useSelector(mapQueuedScrollLyricLog),
        queuedScrollLyricByVerse = useSelector(mapQueuedScrollLyricByVerse),
        queuedScrollLyricIndex = useSelector(mapQueuedScrollLyricIndex),
        queuedScrollLyricAlways = useSelector(mapQueuedScrollLyricAlways),
        queuedScrollLyricNoDuration = useSelector(mapQueuedScrollLyricNoDuration),
        queuedScrollLyricFromAutoScroll = useSelector(mapQueuedScrollLyricFromAutoScroll),
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
        if (queuedScrollLyricLog) {
            if (isHeightlessLyric && !isLyricExpanded) {
                /**
                 * Don't scroll if not expanded in heightless lyric. Just call
                 * the scene change callback right away.
                 */
                if (queuedSceneChangeExitScrollCallback) {
                    _completeSceneChangeExit()
                }

            } else if (
                // If paused, always scroll.
                !isPlaying ||

                // If selecting a new song or verse, always scroll.
                queuedScrollLyricAlways ||

                /**
                 * If autoScroll is on, only scroll from autoScroll, or else if
                 * autoScroll is off, scroll from everything *but* autoScroll.
                 */
                queuedScrollLyricFromAutoScroll === isAutoScroll
            ) {
                const
                    scrollClass = queuedScrollLyricByVerse ?
                        VERSE_SCROLL :
                        LYRIC_ANNOTATION_SCROLL,

                    /**
                     * If no verse index given, default to selected verse.
                     * If scrolling to annotation, index is always given.
                     */
                    index =
                        queuedScrollLyricIndex === -1 ?
                            selectedVerseIndex :
                            queuedScrollLyricIndex,

                    scrollChild = queuedScrollLyricByVerse ?
                        getScrollVerseChild(index) :
                        getScrollAnnotationChild(index)

                scrollElementIntoView({
                    log: queuedScrollLyricLog,
                    scrollClass,
                    scrollParent: getLyricScrollParent(),
                    scrollChild,
                    index,
                    noDuration: queuedScrollLyricNoDuration,
                    deviceWidthIndex,
                    isLyricExpanded,
                    isSelectedLogue,
                    ...queuedSceneChangeExitScrollCallback && {
                        callback: _setTimeoutForSceneChangeExit
                    }
                })
            }

            dispatch(updateScrollLyricStore())
        }
    }, [queuedScrollLyricLog])

    return null
}

ScrollLyricListener.propTypes = {
    getLyricScrollParent: PropTypes.func.isRequired,
    getScrollAnnotationChild: PropTypes.func.isRequired,
    getScrollVerseChild: PropTypes.func.isRequired
}

export default memo(ScrollLyricListener)
