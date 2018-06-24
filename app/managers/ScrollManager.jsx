import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import scrollIntoView from 'scroll-into-view'

import {
    getLyricTopAlign,
    getCarouselLeftAlign
} from '../helpers/responsiveHelper'

import {
    CAROUSEL_SCROLL,
    SCROLL_CLASSES
} from '../constants/dom'

class ScrollManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        windowWidth: PropTypes.number.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
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

    scrollElementIntoView({

        scrollElement,
        scrollClass,
        index,
        time = 500,
        callback = this._scrollElementCallback

    }) {
        const isCarousel = scrollClass === CAROUSEL_SCROLL

        let element = scrollElement

        if (element) {
            console.warn('Scrolling element from ref:', element)

        } else {
            const { childClass } = SCROLL_CLASSES[scrollClass],
            selector = isNaN(index) ? childClass : `${childClass}__${index}`
            element = document.getElementsByClassName(selector)[0]

            console.error('Scrolling element from selector:', element)
        }

        if (element) {
            // console.warn(`Scrolling ${selector} into view.`);
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

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceIndex,
    windowWidth,
    isLyricExpanded
}) => ({
    deviceIndex,
    windowWidth,
    isLyricExpanded
})

export default connect(mapStateToProps)(ScrollManager)
