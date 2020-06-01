import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import { updateScrollLyricStore } from '../../../redux/scrollLyric/action'
import { mapIsPlaying } from '../../../redux/audio/selectors'
import {
    scrollElementIntoView,
    setChildElement
} from '../helper'
import {
    LYRIC_ANNOTATION_SCROLL,
    VERSE_SCROLL
} from '../../../constants/scroll'
import { IS_HEIGHTLESS_LYRIC_SELECTOR } from '../../../redux/responsive/selectors'
import {
    QUEUED_SCROLL_LYRIC_LOG_SELECTOR,
    QUEUED_SCROLL_LYRIC_BY_VERSE_SELECTOR,
    QUEUED_SCROLL_LYRIC_INDEX_SELECTOR,
    QUEUED_SCROLL_LYRIC_ALWAYS_SELECTOR,
    QUEUED_SCROLL_LYRIC_NO_DURATION_SELECTOR,
    QUEUED_SCROLL_LYRIC_FROM_AUTO_SCROLL_SELECTOR,
    QUEUED_SCENE_CHANGE_EXIT_SCROLL_CALLBACK_SELECTOR
} from '../../../redux/scrollLyric/selectors'
import {
    mapSelectedVerseIndex,
    mapIsSelectedLogue
} from '../../../redux/selected/selectors'
import {
    IS_AUTO_SCROLL_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR
} from '../../../redux/toggle/selectors'
import { DEVICE_WIDTH_INDEX_SELECTOR } from '../../../redux/viewport/selectors'

const mapStateToProps = state => {
    const
        isPlaying = mapIsPlaying(state),
        isHeightlessLyric = IS_HEIGHTLESS_LYRIC_SELECTOR(state),
        selectedVerseIndex = mapSelectedVerseIndex(state),
        isSelectedLogue = mapIsSelectedLogue(state),
        isAutoScroll = IS_AUTO_SCROLL_SELECTOR(state),
        isLyricExpanded = IS_LYRIC_EXPANDED_SELECTOR(state),
        deviceWidthIndex = DEVICE_WIDTH_INDEX_SELECTOR(state),
        queuedScrollLyricLog = QUEUED_SCROLL_LYRIC_LOG_SELECTOR(state),
        queuedScrollLyricByVerse = QUEUED_SCROLL_LYRIC_BY_VERSE_SELECTOR(state),
        queuedScrollLyricIndex = QUEUED_SCROLL_LYRIC_INDEX_SELECTOR(state),
        queuedScrollLyricAlways = QUEUED_SCROLL_LYRIC_ALWAYS_SELECTOR(state),
        queuedScrollLyricNoDuration = QUEUED_SCROLL_LYRIC_NO_DURATION_SELECTOR(state),
        queuedScrollLyricFromAutoScroll = QUEUED_SCROLL_LYRIC_FROM_AUTO_SCROLL_SELECTOR(state),
        queuedSceneChangeExitScrollCallback = QUEUED_SCENE_CHANGE_EXIT_SCROLL_CALLBACK_SELECTOR(state)

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
        getRefs: PropTypes.func.isRequired
    }

    carouselAnnotationElements = {}

    componentDidMount() {
        this.props.getRefs({
            setVerseElement: this.setVerseElement,
            setLyricAnnotationElement: this.setLyricAnnotationElement,
            setLyricParent: this.setLyricParent,
            getVerseElement: this.getVerseElement
        })
    }

    verseElements = {}
    lyricAnnotationElements = {}

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
                    scrollParent: this.lyricParentElement,
                    scrollChildren: this._getScrollElementsArray(scrollClass),
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

    _getScrollElementsArray(scrollClass) {
        switch (scrollClass) {
            case LYRIC_ANNOTATION_SCROLL:
                return this.lyricAnnotationElements
            case VERSE_SCROLL:
                return this.verseElements
        }
    }

    getVerseElement = (verseIndex) => {
        return this.verseElements[verseIndex]
    }

    setVerseElement = ({ node, index }) => {
        if (!this.props.isSelectedLogue) {
            setChildElement({
                node,
                index,
                scrollElements: this.verseElements
            })
        }
    }

    setLyricAnnotationElement = ({ node, index }) => {
        if (!this.props.isSelectedLogue) {
            setChildElement({
                node,
                index,
                scrollElements: this.lyricAnnotationElements
            })
        }
    }

    setLyricParent = node => {
        this.lyricParentElement = node
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
