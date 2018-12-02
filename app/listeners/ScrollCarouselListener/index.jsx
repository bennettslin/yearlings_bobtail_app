import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'

import {
    scrollElementIntoView,
    setChildElement
} from 'helpers/scroll'

import { CAROUSEL_SCROLL } from 'constants/dom'

class ScrollListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        queuedScrollCarouselLog: PropTypes.string.isRequired,
        queuedScrollCarouselIndex: PropTypes.number.isRequired,
        queuedScrollCarouselImmediately: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isHiddenCarouselNav: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        deviceIndex: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,
        updateScrollCarouselStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    carouselAnnotationElements = {}

    componentDidMount() {
        this.props.parentThis.setCarouselAnnotationElement = this.setCarouselAnnotationElement
        this.props.parentThis.setCarouselParent = this.setCarouselParent
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
                isHiddenCarouselNav
            } = this.props

            // Only scroll if carousel is shown.
            if (isCarouselShown && !isHiddenCarouselNav) {
                const {
                    queuedScrollCarouselLog,
                    queuedScrollCarouselIndex,
                    queuedScrollCarouselImmediately,
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
                    doScrollImmediately: queuedScrollCarouselImmediately,
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
        queuedScrollCarouselImmediately
    },
    toggleStore: { isCarouselShown },
    deviceStore: {
        deviceIndex,
        windowWidth
    },
    responsiveStore: { isHiddenCarouselNav },
    songStore: { isSelectedLogue }
}) => ({
    queuedScrollCarouselLog,
    queuedScrollCarouselIndex,
    queuedScrollCarouselImmediately,
    isCarouselShown,
    deviceIndex,
    windowWidth,
    isHiddenCarouselNav,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateScrollCarouselStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(ScrollListener)
