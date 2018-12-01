import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import scrollIntoView from 'scroll-into-view'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'

import {
    getLyricTopAlign,
    getCarouselLeftAlign
} from './helper'

import {
    CAROUSEL_SCROLL,
    LYRIC_ANNOTATION_SCROLL,
    VERSE_SCROLL
} from 'constants/dom'

class ScrollManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        scrollCarouselLog: PropTypes.string.isRequired,
        scrollCarouselIndex: PropTypes.number.isRequired,
        doScrollCarouselImmediately: PropTypes.bool.isRequired,
        scrollLyricLog: PropTypes.string.isRequired,
        doScrollLyricByVerse: PropTypes.bool.isRequired,
        scrollLyricIndex: PropTypes.number.isRequired,
        doScrollLyricImmediately: PropTypes.bool.isRequired,
        doDetermineVerseBars: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        deviceIndex: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,
        updateScrollCarouselStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        determineVerseBars: PropTypes.func.isRequired
    }

    myCarouselAnnotationElements = {}
    myLyricAnnotationElements = {}
    myVerseElements = {}

    componentDidMount() {
        this.props.setRef(this)
    }

    componentDidUpdate(prevProps) {
        this._scrollCarousel(prevProps)
        this._scrollLyric(prevProps)
    }

    _scrollCarousel(prevProps) {
        const
            { scrollCarouselLog } = this.props,
            { scrollCarouselLog: prevCarouselLog } = prevProps

        if (scrollCarouselLog && !prevCarouselLog) {
            const {
                scrollCarouselLog,
                scrollCarouselIndex,
                doScrollCarouselImmediately
            } = this.props

            this._scrollElementIntoView({
                log: scrollCarouselLog,
                scrollClass: CAROUSEL_SCROLL,
                index: scrollCarouselIndex,
                doScrollImmediately: doScrollCarouselImmediately
            })

            this.props.updateScrollCarouselStore()
        }
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
                doDetermineVerseBars
            } = this.props

            this._scrollElementIntoView({
                log: scrollLyricLog,
                scrollClass:
                    doScrollLyricByVerse ?
                        VERSE_SCROLL :
                        LYRIC_ANNOTATION_SCROLL,
                index: scrollLyricIndex,
                doScrollImmediately: doScrollLyricImmediately,
                doDetermineVerseBars
            })

            this.props.updateScrollLyricStore()
        }
    }

    _scrollElementIntoView({
        log = '',
        scrollClass,
        index,
        doScrollImmediately,
        doDetermineVerseBars
    }) {
        if (this.props.isSelectedLogue || index < 0) {
            return
        }

        const isCarousel = scrollClass === CAROUSEL_SCROLL

        // Don't scroll carousel if it doesn't exist!
        if (isCarousel && this.props.isHiddenCarouselNav) {
            return false
        }

        const
            time = doScrollImmediately ? 0 : 500,
            scrollElement = this._getScrollElementsArray(scrollClass)[index]

        let element = scrollElement

        /**
         * TODO: This is a fallback that should never get called. Delete once
         * confident that it doesn't.
         */
        if (!element) {
            const selector =
                isNaN(index) ?
                    scrollClass : `${scrollClass}__${index}`
            element = document.getElementsByClassName(selector)[0]

            logger.error(log, '\nScroll by selector:', scrollClass, index)
        }

        if (element) {
            logger.info(log, '\nScroll by ref:', scrollClass, index, '\nWith time:', time)

            const {
                    deviceIndex,
                    windowWidth,
                    isLyricExpanded
                } = this.props,

                align = isCarousel ?
                    getCarouselLeftAlign(deviceIndex, windowWidth) :
                    getLyricTopAlign(deviceIndex, isLyricExpanded),

                validTarget = this._getValidTarget(
                    scrollClass
                )

            scrollIntoView(element, {
                time,
                align,
                validTarget
            }, doDetermineVerseBars ? this.props.determineVerseBars : null)
        }
    }

    _getValidTarget(scrollClass) {
        const parentElement = this._getScrollParent(scrollClass)

        return (element) => {
            const isParent = element === parentElement

            if (isParent) {
                logger.info('Scroll parent:', element)
            }

            return isParent
        }
    }

    _scrollElementCallback = (status) => {
        logger.warn('scroll status:', status)
    }

    _getScrollElementsArray(scrollClass) {

        let elementsArray

        switch (scrollClass) {
            case CAROUSEL_SCROLL:
                elementsArray = this.myCarouselAnnotationElements
                break
            case LYRIC_ANNOTATION_SCROLL:
                elementsArray = this.myLyricAnnotationElements
                break
            case VERSE_SCROLL:
                elementsArray = this.myVerseElements
                break
        }

        return elementsArray
    }

    _getScrollParent(scrollClass) {
        return scrollClass === CAROUSEL_SCROLL ?
            this.carouselParentElement :
            this.lyricParentElement
    }

    getVerseElement(verseIndex) {
        return this.myVerseElements[verseIndex]
    }

    setCarouselAnnotationRef(payload) {
        this._setRef(CAROUSEL_SCROLL, payload)
    }

    setLyricAnnotationRef(payload) {
        this._setRef(LYRIC_ANNOTATION_SCROLL, payload)
    }

    setVerseRef(payload) {
        this._setRef(VERSE_SCROLL, payload)
    }

    setLyricParentRef(node) {
        this.lyricParentElement = node
    }

    setCarouselParentRef(node) {
        this.carouselParentElement = node
    }

    _setRef(
        scrollClass,
        {
            node, index
        }
    ) {
        if (this.props.isSelectedLogue) {
            return
        }

        const scrollElementsArray = this._getScrollElementsArray(scrollClass)

        if (node) {
            scrollElementsArray[index] = node
        } else {
            delete scrollElementsArray[index]
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    scrollCarouselStore: {
        scrollCarouselLog,
        scrollCarouselIndex,
        doScrollCarouselImmediately
    },
    scrollLyricStore: {
        scrollLyricLog,
        doScrollLyricByVerse,
        scrollLyricIndex,
        doScrollLyricImmediately,
        doDetermineVerseBars
    },
    toggleStore: { isLyricExpanded },
    deviceStore: {
        deviceIndex,
        windowWidth
    },
    responsiveStore: { isHiddenCarouselNav },
    songStore: { isSelectedLogue }
}) => ({
    scrollCarouselLog,
    scrollCarouselIndex,
    doScrollCarouselImmediately,
    scrollLyricLog,
    doScrollLyricByVerse,
    scrollLyricIndex,
    doScrollLyricImmediately,
    doDetermineVerseBars,
    isLyricExpanded,
    deviceIndex,
    windowWidth,
    isHiddenCarouselNav,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateScrollCarouselStore,
        updateScrollLyricStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(ScrollManager)
