import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'

import {
    scrollElementIntoView,
    setChildElement
} from 'helpers/scroll'

import { CAROUSEL_SCROLL } from 'constants/dom'

class ScrollCarouselListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        queuedScrollCarouselLog: PropTypes.string.isRequired,
        queuedScrollCarouselIndex: PropTypes.number.isRequired,
        queuedScrollCarouselFromRender: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isUnrenderableCarouselNav: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        deviceIndex: PropTypes.number.isRequired,
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
            const {
                isCarouselShown,
                isUnrenderableCarouselNav
            } = this.props

            // Only scroll if carousel is renderable.
            if (isCarouselShown && !isUnrenderableCarouselNav) {
                const {
                    queuedScrollCarouselLog,
                    queuedScrollCarouselIndex,
                    queuedScrollCarouselFromRender,
                    deviceIndex,
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
                    doScrollImmediately: queuedScrollCarouselFromRender,
                    deviceIndex,
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

    setCarouselParent = (node) => {
        this.carouselParentElement = node
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    scrollCarouselStore: {
        queuedScrollCarouselLog,
        queuedScrollCarouselIndex,
        queuedScrollCarouselFromRender
    },
    toggleStore: { isCarouselShown },
    deviceStore: {
        deviceIndex,
        windowWidth
    },
    responsiveStore: { isUnrenderableCarouselNav },
    songStore: { isSelectedLogue }
}) => ({
    queuedScrollCarouselLog,
    queuedScrollCarouselIndex,
    queuedScrollCarouselFromRender,
    isCarouselShown,
    deviceIndex,
    windowWidth,
    isUnrenderableCarouselNav,
    isSelectedLogue
})

export default connect(
    mapStateToProps,
    { updateScrollCarouselStore }
)(ScrollCarouselListener)
