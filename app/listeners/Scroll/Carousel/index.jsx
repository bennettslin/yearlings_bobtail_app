import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'

import {
    scrollElementIntoView,
    setChildElement
} from '../helper'

import { CAROUSEL_SCROLL } from '../../../constants/scroll'

const mapStateToProps = state => {
    const {
        scrollCarouselStore: {
            queuedScrollCarouselLog,
            queuedScrollCarouselIndex,
            queuedScrollCarouselNoDuration
        },
        toggleStore: { isCarouselShown },
        viewportStore: {
            deviceWidthIndex,
            windowWidth
        },
        selectedStore: { isSelectedLogue }
    } = state

    return {
        queuedScrollCarouselLog,
        queuedScrollCarouselIndex,
        queuedScrollCarouselNoDuration,
        isCarouselShown,
        deviceWidthIndex,
        windowWidth,
        isSelectedLogue
    }
}

class ScrollCarouselListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        queuedScrollCarouselLog: PropTypes.string.isRequired,
        queuedScrollCarouselIndex: PropTypes.number.isRequired,
        queuedScrollCarouselNoDuration: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        deviceWidthIndex: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,
        updateScrollCarouselStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    carouselAnnotationElements = {}

    componentDidMount() {
        this.props.getRefs({
            setCarouselAnnotationElement: this.setCarouselAnnotationElement,
            setCarouselParent: this.setCarouselParent
        })
    }

    componentDidUpdate(prevProps) {
        this._scrollCarousel(prevProps)
    }

    _scrollCarousel(prevProps) {
        const
            { queuedScrollCarouselLog } = this.props,
            { queuedScrollCarouselLog: prevCarouselLog } = prevProps

        if (queuedScrollCarouselLog && !prevCarouselLog) {
            const { isCarouselShown } = this.props

            // Only scroll if carousel is shown.
            if (isCarouselShown) {
                const {
                    queuedScrollCarouselLog,
                    queuedScrollCarouselIndex,
                    queuedScrollCarouselNoDuration,
                    deviceWidthIndex,
                    windowWidth,
                    isSelectedLogue
                } = this.props

                scrollElementIntoView({
                    isCarousel: true,
                    log: queuedScrollCarouselLog,
                    scrollClass: CAROUSEL_SCROLL,
                    scrollParent: this.carouselParentElement,
                    scrollChildren: this.carouselAnnotationElements,
                    index: queuedScrollCarouselIndex,
                    noDuration: queuedScrollCarouselNoDuration,
                    deviceWidthIndex,
                    windowWidth,
                    isSelectedLogue
                })
            }

            this.props.updateScrollCarouselStore()
        }
    }

    setCarouselAnnotationElement = ({ node, index }) => {
        if (!this.props.isSelectedLogue) {
            setChildElement({
                node,
                index,
                scrollElements: this.carouselAnnotationElements
            })
        }
    }

    setCarouselParent = node => {
        this.carouselParentElement = node
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    { updateScrollCarouselStore }
)(ScrollCarouselListener)
