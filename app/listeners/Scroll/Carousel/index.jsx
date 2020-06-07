import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { scrollElementIntoView } from '../helper'
import { CAROUSEL_SCROLL } from '../../../constants/scroll'
import {
    mapQueuedScrollCarouselLog,
    mapQueuedScrollCarouselIndex,
    mapQueuedScrollCarouselNoDuration
} from '../../../redux/scrollCarousel/selectors'
import { mapIsSelectedLogue } from '../../../redux/selected/selectors'
import { mapIsCarouselShown } from '../../../redux/toggle/selectors'
import {
    mapWindowWidth,
    mapDeviceWidthIndex
} from '../../../redux/viewport/selectors'

const mapStateToProps = state => {
    const
        isSelectedLogue = mapIsSelectedLogue(state),
        isCarouselShown = mapIsCarouselShown(state),
        windowWidth = mapWindowWidth(state),
        deviceWidthIndex = mapDeviceWidthIndex(state),
        queuedScrollCarouselLog = mapQueuedScrollCarouselLog(state),
        queuedScrollCarouselIndex = mapQueuedScrollCarouselIndex(state),
        queuedScrollCarouselNoDuration = mapQueuedScrollCarouselNoDuration(state)

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
        getCarouselScrollChild: PropTypes.func.isRequired,
        getCarouselScrollParent: PropTypes.func.isRequired
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
                    scrollParent: this.props.getCarouselScrollParent(),
                    scrollChild: this.props.getCarouselScrollChild(queuedScrollCarouselIndex),
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

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    { updateScrollCarouselStore }
)(ScrollCarouselListener)
