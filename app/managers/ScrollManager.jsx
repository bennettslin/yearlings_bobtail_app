import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import scrollIntoView from 'scroll-into-view'

import {
    getLyricTopAlign,
    getCarouselLeftAlign
} from '../helpers/responsiveHelper'

import {
    getSongIsLogue
} from '../helpers/dataHelper'

import {
    CAROUSEL_SCROLL,
    LYRIC_ANNOTATION_SCROLL,
    VERSE_SCROLL,
    SCROLL_CLASSES
} from '../constants/dom'

class ScrollManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.myCarouselAnnotationElements = {}
        this.myLyricAnnotationElements = {}
        this.myVerseElements = {}
    }

    componentDidMount() {
        this.props.getRef(this)

        window.elements = () => {
            console.error(
                'Carousel annotation elements:',
                this.myCarouselAnnotationElements,
                '\nLyric annotation elements:',
                this.myLyricAnnotationElements,
                '\nVerse elements',
                this.myVerseElements
            )
        }
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

    _setRef(
        scrollClass,
        { node, index }
    ) {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
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

    scrollElementIntoView({
        log = '',
        scrollClass,
        index,
        time = 500,
        // callback = this._scrollElementCallback
        callback

    }) {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return
        }

        const scrollElement =
            this._getScrollElementsArray(scrollClass)[index],

            isCarousel = scrollClass === CAROUSEL_SCROLL

        let element = scrollElement

        if (element) {
            console.info(log, '\nScroll by ref:', scrollClass, index)

        // This is a fallback. It should never get called.
        } else {
            const { childClass } = SCROLL_CLASSES[scrollClass],
            selector = isNaN(index) ? childClass : `${childClass}__${index}`
            element = document.getElementsByClassName(selector)[0]

            console.error(log, '\nScroll by selector:', scrollClass, index)
        }

        if (element) {
            const {
                    deviceIndex,
                    windowWidth,
                    isLyricExpanded
                } = this.props,

                align = isCarousel ?
                    getCarouselLeftAlign(deviceIndex, windowWidth) :
                    getLyricTopAlign(deviceIndex, isLyricExpanded)

            let validTarget

            if (SCROLL_CLASSES[scrollClass]) {
                const { parentClass } = SCROLL_CLASSES[scrollClass]

                validTarget = this._getIsValidScrollingTargetCallback(
                    parentClass
                )
            }

            scrollIntoView(element, {
                time,
                align,
                validTarget
            }, callback)
        }
    }

    _getIsValidScrollingTargetCallback(scrollParentClass) {

        // Don't scroll any immovable parent containers.
        return (parent) => {
            const { className } = parent,
                isValidTarget =
                    parent !== window
                    && (
                        className
                        && new RegExp(
                                "(\\s|^)" + scrollParentClass + "(\\s|$)"
                            ).test(className)
                    )

            return isValidTarget
        }
    }

    _scrollElementCallback = (status) => {
        console.warn('scroll status:', status);
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceIndex,
    windowWidth,
    isLyricExpanded,
    selectedSongIndex
}) => ({
    deviceIndex,
    windowWidth,
    isLyricExpanded,
    selectedSongIndex
})

export default connect(mapStateToProps)(ScrollManager)
