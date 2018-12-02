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
        scrollCarouselLog: PropTypes.string.isRequired,
        scrollCarouselIndex: PropTypes.number.isRequired,
        doScrollCarouselImmediately: PropTypes.bool.isRequired,
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
        this.props.parentThis.setCarouselAnnotation = this.setCarouselAnnotation
        this.props.parentThis.setCarouselParent = this.setCarouselParent
    }

    componentDidUpdate(prevProps) {
        this._scrollCarousel(prevProps)
    }

    _scrollCarousel(prevProps) {
        const
            { scrollCarouselLog } = this.props,
            { scrollCarouselLog: prevCarouselLog } = prevProps

        if (scrollCarouselLog && !prevCarouselLog) {
            const {
                isCarouselShown,
                isHiddenCarouselNav
            } = this.props

            // Only scroll if carousel is shown.
            if (isCarouselShown && !isHiddenCarouselNav) {
                const {
                    scrollCarouselLog,
                    scrollCarouselIndex,
                    doScrollCarouselImmediately,
                    deviceIndex,
                    windowWidth,
                    isSelectedLogue
                } = this.props

                scrollElementIntoView({
                    isCarousel: true,
                    log: scrollCarouselLog,
                    scrollClass: CAROUSEL_SCROLL,
                    scrollParent: this.carouselParentElement,
                    scrollChildren: this.carouselAnnotationElements,
                    index: scrollCarouselIndex,
                    doScrollImmediately: doScrollCarouselImmediately,
                    deviceIndex,
                    windowWidth,
                    isSelectedLogue
                })
            }

            this.props.updateScrollCarouselStore()
        }
    }

    setCarouselAnnotation = ({ node, index }) => {
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
        scrollCarouselLog,
        scrollCarouselIndex,
        doScrollCarouselImmediately
    },
    toggleStore: { isCarouselShown },
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
