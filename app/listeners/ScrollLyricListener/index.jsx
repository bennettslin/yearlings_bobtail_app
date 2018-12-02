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
        scrollLyricLog: PropTypes.string.isRequired,
        doScrollLyricByVerse: PropTypes.bool.isRequired,
        scrollLyricIndex: PropTypes.number.isRequired,
        doScrollLyricImmediately: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        deviceIndex: PropTypes.number.isRequired,
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
            { scrollLyricLog } = this.props,
            { scrollLyricLog: prevLyricLog } = prevProps

        if (scrollLyricLog && !prevLyricLog) {
            const {
                    scrollLyricLog,
                    doScrollLyricByVerse,
                    scrollLyricIndex,
                    doScrollLyricImmediately,
                    deviceIndex,
                    isLyricExpanded,
                    isSelectedLogue
                } = this.props,

                scrollClass = doScrollLyricByVerse ?
                    VERSE_SCROLL :
                    LYRIC_ANNOTATION_SCROLL

            scrollElementIntoView({
                log: scrollLyricLog,
                scrollClass,
                scrollParent: this.lyricParentElement,
                scrollChildren: this._getScrollElementsArray(scrollClass),
                index: scrollLyricIndex,
                doScrollImmediately: doScrollLyricImmediately,
                deviceIndex,
                isLyricExpanded,
                isSelectedLogue,
                callback: this._determineVerseBars
            })

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
        this.props.updateVerseBarsStore({ doDetermineVerseBars: true })
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
        scrollLyricLog,
        doScrollLyricByVerse,
        scrollLyricIndex,
        doScrollLyricImmediately
    },
    toggleStore: {
        isLyricExpanded
    },
    deviceStore: {
        deviceIndex
    },
    songStore: { isSelectedLogue }
}) => ({
    scrollLyricLog,
    doScrollLyricByVerse,
    scrollLyricIndex,
    doScrollLyricImmediately,
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
