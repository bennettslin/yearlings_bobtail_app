import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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

const mapStateToProps = state => {
    const
        isPlaying = mapIsPlaying(state),
        isHeightlessLyric = mapIsHeightlessLyric(state),
        selectedVerseIndex = mapSelectedVerseIndex(state),
        isSelectedLogue = mapIsSelectedLogue(state),
        isAutoScroll = mapIsAutoScroll(state),
        isLyricExpanded = mapIsLyricExpanded(state),
        deviceWidthIndex = mapDeviceWidthIndex(state),
        queuedScrollLyricLog = mapQueuedScrollLyricLog(state),
        queuedScrollLyricByVerse = mapQueuedScrollLyricByVerse(state),
        queuedScrollLyricIndex = mapQueuedScrollLyricIndex(state),
        queuedScrollLyricAlways = mapQueuedScrollLyricAlways(state),
        queuedScrollLyricNoDuration = mapQueuedScrollLyricNoDuration(state),
        queuedScrollLyricFromAutoScroll = mapQueuedScrollLyricFromAutoScroll(state),
        queuedSceneChangeExitScrollCallback = mapQueuedSceneChangeExitScrollCallback(state)

    return {
        queuedScrollLyricLog,
        queuedScrollLyricByVerse,
        queuedScrollLyricIndex,
        queuedScrollLyricAlways,
        queuedScrollLyricNoDuration,
        queuedScrollLyricFromAutoScroll,
        queuedSceneChangeExitScrollCallback,
        selectedVerseIndex,
        isSelectedLogue,
        isPlaying,
        isAutoScroll,
        isLyricExpanded,
        deviceWidthIndex,
        isHeightlessLyric
    }
}

class ScrollLyricListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        queuedScrollLyricLog: PropTypes.string.isRequired,
        queuedScrollLyricByVerse: PropTypes.bool.isRequired,
        queuedScrollLyricIndex: PropTypes.number.isRequired,
        queuedScrollLyricAlways: PropTypes.bool.isRequired,
        queuedScrollLyricNoDuration: PropTypes.bool.isRequired,
        queuedScrollLyricFromAutoScroll: PropTypes.bool.isRequired,
        queuedSceneChangeExitScrollCallback: PropTypes.bool.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        deviceWidthIndex: PropTypes.number.isRequired,
        isAutoScroll: PropTypes.bool.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,

        updateEntranceStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,

        // From parent.
        getLyricScrollParent: PropTypes.func.isRequired,
        getScrollAnnotationChild: PropTypes.func.isRequired,
        getScrollVerseChild: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._scrollLyric(prevProps)
    }

    _scrollLyric(prevProps) {
        const
            {
                isPlaying,
                isHeightlessLyric,
                isLyricExpanded,
                queuedScrollLyricLog,
                queuedScrollLyricAlways,
                queuedScrollLyricFromAutoScroll,
                queuedSceneChangeExitScrollCallback,
                isAutoScroll
            } = this.props,
            { queuedScrollLyricLog: prevScrollLyricLog } = prevProps

        if (
            queuedScrollLyricLog &&
            queuedScrollLyricLog !== prevScrollLyricLog
        ) {

            if (isHeightlessLyric && !isLyricExpanded) {
                /**
                 * Don't scroll if not expanded in heightless lyric. Just call
                 * the scene change callback right away.
                 */
                if (queuedSceneChangeExitScrollCallback) {
                    this._completeSceneChangeExit()
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
                const {
                        queuedScrollLyricLog,
                        queuedScrollLyricByVerse,
                        queuedScrollLyricIndex,
                        queuedScrollLyricNoDuration,
                        deviceWidthIndex,
                        selectedVerseIndex,
                        isSelectedLogue
                    } = this.props,

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
                            queuedScrollLyricIndex

                scrollElementIntoView({
                    log: queuedScrollLyricLog,
                    scrollClass,
                    scrollParent: this.props.getLyricScrollParent(),
                    scrollChild: this._getScrollChild(scrollClass, index),
                    index,
                    noDuration: queuedScrollLyricNoDuration,
                    deviceWidthIndex,
                    isLyricExpanded,
                    isSelectedLogue,
                    ...queuedSceneChangeExitScrollCallback && {
                        callback: this._setTimeoutForSceneChangeExit
                    }
                })
            }

            this.props.updateScrollLyricStore()
        }
    }

    _setTimeoutForSceneChangeExit = () => {
        // This timeout is necessary to fully complete scroll animation.
        setTimeout(this._completeSceneChangeExit, 0)
    }

    _completeSceneChangeExit = () => {
        logTransition('Scene scroll did exit from lyric scroll.')
        this.props.updateEntranceStore({ didSceneScrollExit: true })
    }

    _getScrollChild(scrollClass, index) {
        switch (scrollClass) {
            case LYRIC_ANNOTATION_SCROLL:
                return this.props.getScrollAnnotationChild(index)
            case VERSE_SCROLL:
                return this.props.getScrollVerseChild(index)
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        updateEntranceStore,
        updateScrollLyricStore
    }
)(ScrollLyricListener)
