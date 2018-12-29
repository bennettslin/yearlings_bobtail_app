import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateVerseBarsStore } from 'flux/verseBars/action'

import {
    scrollElementIntoView,
    setChildElement
} from '../helper'

import {
    LYRIC_ANNOTATION_SCROLL,
    VERSE_SCROLL
} from 'constants/scroll'

class ScrollLyricListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        queuedScrollLyricLog: PropTypes.string.isRequired,
        queuedScrollLyricByVerse: PropTypes.bool.isRequired,
        queuedScrollLyricIndex: PropTypes.number.isRequired,
        queuedScrollLyricAlways: PropTypes.bool.isRequired,
        queuedScrollLyricFromRender: PropTypes.bool.isRequired,
        queuedScrollLyricFromAutoScroll: PropTypes.bool.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        deviceIndex: PropTypes.number.isRequired,
        isAutoScroll: PropTypes.bool.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateVerseBarsStore: PropTypes.func.isRequired,

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
                queuedScrollLyricLog,
                queuedScrollLyricAlways,
                queuedScrollLyricFromAutoScroll,
                isAutoScroll
            } = this.props,
            { queuedScrollLyricLog: prevLyricLog } = prevProps

        if (queuedScrollLyricLog && !prevLyricLog) {

            if (
                // If paused, always scroll.
                !isPlaying ||

                // If selecting a new verse, always scroll.
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
                        queuedScrollLyricFromRender,
                        deviceIndex,
                        isLyricExpanded,
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
                    doScrollImmediately: queuedScrollLyricFromRender,
                    deviceIndex,
                    isLyricExpanded,
                    isSelectedLogue,
                    callback: this._determineVerseBars
                })
            }

            this.props.updateScrollLyricStore()
        }
    }

    _getScrollElementsArray(scrollClass) {
        switch (scrollClass) {
            case LYRIC_ANNOTATION_SCROLL:
                return this.lyricAnnotationElements
            case VERSE_SCROLL:
                return this.verseElements
        }
    }

    _determineVerseBars = () => {
        this.props.updateVerseBarsStore({ queuedDetermineVerseBars: true })
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

    setLyricParent = (node) => {
        this.lyricParentElement = node
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    scrollLyricStore: {
        queuedScrollLyricLog,
        queuedScrollLyricByVerse,
        queuedScrollLyricIndex,
        queuedScrollLyricAlways,
        queuedScrollLyricFromRender,
        queuedScrollLyricFromAutoScroll
    },
    selectedStore: {
        selectedVerseIndex,
        isSelectedLogue
    },
    audioStore: { isPlaying },
    toggleStore: {
        isAutoScroll,
        isLyricExpanded
    },
    deviceStore: {
        deviceIndex
    }
}) => ({
    queuedScrollLyricLog,
    queuedScrollLyricByVerse,
    queuedScrollLyricIndex,
    queuedScrollLyricAlways,
    queuedScrollLyricFromRender,
    queuedScrollLyricFromAutoScroll,
    selectedVerseIndex,
    isSelectedLogue,
    isPlaying,
    isAutoScroll,
    isLyricExpanded,
    deviceIndex
})

export default connect(
    mapStateToProps,
    {
        updateScrollLyricStore,
        updateVerseBarsStore
    }
)(ScrollLyricListener)
