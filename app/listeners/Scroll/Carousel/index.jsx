import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import {
    scrollElementIntoView,
    setChildElement
} from '../helper'
import { CAROUSEL_SCROLL } from '../../../constants/scroll'
import {
    QUEUED_SCROLL_CAROUSEL_LOG_SELECTOR,
    QUEUED_SCROLL_CAROUSEL_INDEX_SELECTOR,
    QUEUED_SCROLL_CAROUSEL_NO_DURATION_SELECTOR
} from '../../../redux/scrollCarousel/selectors'
import { mapIsSelectedLogue } from '../../../redux/selected/selectors'
import { IS_CAROUSEL_SHOWN_SELECTOR } from '../../../redux/toggle/selectors'
import {
    WINDOW_WIDTH_SELECTOR,
    DEVICE_WIDTH_INDEX_SELECTOR
} from '../../../redux/viewport/selectors'

const mapStateToProps = state => {
    const
        isSelectedLogue = mapIsSelectedLogue(state),
        isCarouselShown = IS_CAROUSEL_SHOWN_SELECTOR(state),
        windowWidth = WINDOW_WIDTH_SELECTOR(state),
        deviceWidthIndex = DEVICE_WIDTH_INDEX_SELECTOR(state),
        queuedScrollCarouselLog = QUEUED_SCROLL_CAROUSEL_LOG_SELECTOR(state),
        queuedScrollCarouselIndex = QUEUED_SCROLL_CAROUSEL_INDEX_SELECTOR(state),
        queuedScrollCarouselNoDuration = QUEUED_SCROLL_CAROUSEL_NO_DURATION_SELECTOR(state)

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
