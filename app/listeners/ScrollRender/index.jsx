// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'

class ScrollRenderListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        didCarouselEnter: PropTypes.bool.isRequired,
        didLyricEnter: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        updateScrollCarouselStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._handleScrollUponCarouselRender(prevProps)
        this._handleScrollUponLyricRender(prevProps)
    }

    _handleScrollUponCarouselRender = (prevProps) => {
        const
            {
                isSelectedLogue,
                didCarouselEnter
            } = this.props,
            { didCarouselEnter: couldCarouselRender } = prevProps

        // TODO: This now scrolls, but maybe do with no animation.
        if (
            !isSelectedLogue
            && didCarouselEnter
            && !couldCarouselRender
        ) {
            const { selectedAnnotationIndex } = this.props

            // Scroll to carousel annotation if toggled on.
            this.props.updateScrollCarouselStore({
                queuedScrollCarouselLog: 'Rerender selected carousel annotation.',
                queuedScrollCarouselIndex: selectedAnnotationIndex || 1,
                queuedScrollCarouselFromRender: true
            })
        }
    }

    _handleScrollUponLyricRender = (prevProps) => {
        const
            {
                isSelectedLogue,
                didLyricEnter
            } = this.props,
            { didLyricEnter: couldRender } = prevProps

        // TODO: This now scrolls, but maybe do with no animation.
        if (
            !isSelectedLogue
            && didLyricEnter
            && !couldRender
        ) {
            this.props.updateScrollLyricStore({
                queuedScrollLyricLog: 'Rerender selected verse.',
                queuedScrollLyricByVerse: true,
                queuedScrollLyricFromRender: true
            })
        }
    }
    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedStore: {
        isSelectedLogue,
        selectedAnnotationIndex
    },
    lyricStore: {
        didCarouselEnter,
        didLyricEnter
    }
}) => ({
    isSelectedLogue,
    didCarouselEnter,
    didLyricEnter,
    selectedAnnotationIndex
})

export default connect(
    mapStateToProps,
    {
        updateScrollCarouselStore,
        updateScrollLyricStore
    }
)(ScrollRenderListener)
