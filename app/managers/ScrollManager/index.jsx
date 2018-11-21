import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import scrollIntoView from 'scroll-into-view'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import {
    getLyricTopAlign,
    getCarouselLeftAlign
} from './helper'

import {
    CAROUSEL_SCROLL,
    LYRIC_ANNOTATION_SCROLL,
    VERSE_SCROLL
} from 'constants/dom'

class ScrollManager extends Component {

    static propTypes = {
        // Through Redux.
        isLyricExpanded: PropTypes.bool.isRequired,
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        deviceIndex: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.myCarouselAnnotationElements = {}
        this.myLyricAnnotationElements = {}
        this.myVerseElements = {}
    }

    componentDidMount() {
        this.props.setRef(this)

        // window.elements = () => {
        //     logger.error(
        //         'Carousel annotation elements:',
        //         this.myCarouselAnnotationElements,
        //         '\nLyric annotation elements:',
        //         this.myLyricAnnotationElements,
        //         '\nVerse elements',
        //         this.myVerseElements
        //     )
        // }
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
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

    setLyricVerseParentRef(node) {
        this.lyricVerseParentElement = node
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
            this.lyricVerseParentElement
    }

    getVerseElement(verseIndex) {
        return this.myVerseElements[verseIndex]
    }

    scrollElementIntoView({
        log = '',
        scrollClass,
        index,
        time = 500,
        // callback = this._scrollElementCallback
        callback

    }) {
        if (this.props.isSelectedLogue || index < 0) {
            return
        }

        const isCarousel = scrollClass === CAROUSEL_SCROLL

        // Don't scroll carousel if it doesn't exist!
        if (isCarousel && this.props.isHiddenCarouselNav) {
            return false
        }

        const scrollElement =
            this._getScrollElementsArray(scrollClass)[index]

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
            logger.info(log, '\nScroll by ref:', scrollClass, index)

            const {
                    deviceIndex,
                    windowWidth,
                    isLyricExpanded
                } = this.props,

                align = isCarousel ?
                    getCarouselLeftAlign(deviceIndex, windowWidth) :
                    getLyricTopAlign(deviceIndex, isLyricExpanded),

                validTarget = this._getIsValidScrollingTargetCallback(
                    scrollClass
                )

            scrollIntoView(element, {
                time,
                align,
                validTarget
            }, callback)
        }
    }

    _getIsValidScrollingTargetCallback(scrollClass) {
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

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isLyricExpanded },
    deviceStore: {
        deviceIndex,
        windowWidth
    },
    responsiveStore: { isHiddenCarouselNav },
    songStore: { isSelectedLogue }
}) => ({
    isLyricExpanded,
    deviceIndex,
    windowWidth,
    isHiddenCarouselNav,
    isSelectedLogue
})

export default connect(mapStateToProps)(ScrollManager)
