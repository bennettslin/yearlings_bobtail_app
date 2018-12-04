import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateVerseBarsStore } from 'flux/verseBars/action'

import {
    scrollElementIntoView,
    setChildElement
} from 'helpers/scroll'

import {
    LYRIC_ANNOTATION_SCROLL,
    VERSE_SCROLL
} from 'constants/dom'

class ScrollLyricListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        queuedScrollLyricLog: PropTypes.string.isRequired,
        queuedScrollLyricByVerse: PropTypes.bool.isRequired,
        queuedScrollLyricIndex: PropTypes.number.isRequired,
        queuedScrollLyricFromRender: PropTypes.bool.isRequired,
        queuedScrollLyricFromAutoScroll: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        deviceIndex: PropTypes.number.isRequired,
        isAutoScroll: PropTypes.bool.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateVerseBarsStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    carouselAnnotationElements = {}

    componentDidMount() {
        this.props.parentThis.setVerseElement = this.setVerseElement
        this.props.parentThis.setLyricAnnotationElement = this.setLyricAnnotationElement
        this.props.parentThis.setLyricParent = this.setLyricParent
        this.props.parentThis.getVerseElement = this.getVerseElement
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
                queuedScrollLyricFromAutoScroll,
                isAutoScroll
            } = this.props,
            { queuedScrollLyricLog: prevLyricLog } = prevProps

        if (queuedScrollLyricLog && !prevLyricLog) {

            if (
                // If paused, always scroll.
                !isPlaying ||

                /**
                 * If autoScroll is on, only scroll from autoScroll, or else if
                 * autoScroll is off, scroll from everything but autoScroll.
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
                        isSelectedLogue
                    } = this.props,

                    scrollClass = queuedScrollLyricByVerse ?
                        VERSE_SCROLL :
                        LYRIC_ANNOTATION_SCROLL

                scrollElementIntoView({
                    log: queuedScrollLyricLog,
                    scrollClass,
                    scrollParent: this.lyricParentElement,
                    scrollChildren: this._getScrollElementsArray(scrollClass),
                    index: queuedScrollLyricIndex,
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
        queuedScrollLyricFromRender,
        queuedScrollLyricFromAutoScroll
    },
    playerStore: { isPlaying },
    toggleStore: {
        isAutoScroll,
        isLyricExpanded
    },
    deviceStore: {
        deviceIndex
    },
    songStore: { isSelectedLogue }
}) => ({
    queuedScrollLyricLog,
    queuedScrollLyricByVerse,
    queuedScrollLyricIndex,
    queuedScrollLyricFromRender,
    queuedScrollLyricFromAutoScroll,
    isPlaying,
    isAutoScroll,
    isLyricExpanded,
    deviceIndex,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateScrollLyricStore,
        updateVerseBarsStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(ScrollLyricListener)
