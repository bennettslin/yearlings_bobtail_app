// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderedStore } from 'flux/rendered/action'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'

class RenderListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        didCarouselRender: PropTypes.bool.isRequired,
        didLyricRender: PropTypes.bool.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        updateRenderedStore: PropTypes.func.isRequired,
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
                didCarouselRender
            } = this.props,
            { didCarouselRender: couldCarouselRender } = prevProps

        // TODO: This now scrolls, but maybe do with no animation.
        if (
            !isSelectedLogue
            && didCarouselRender
            && !couldCarouselRender
        ) {
            const { selectedAnnotationIndex } = this.props

            // Scroll to carousel annotation if toggled on.
            this.props.updateScrollCarouselStore({
                scrollCarouselLog: 'Rerender selected carousel annotation.',
                scrollCarouselIndex: selectedAnnotationIndex || 1,
                doScrollCarouselImmediately: true
            })
        }
    }

    _handleScrollUponLyricRender = (prevProps) => {
        const
            {
                isSelectedLogue,
                didLyricRender
            } = this.props,
            { didLyricRender: couldRender } = prevProps

        // TODO: This now scrolls, but maybe do with no animation.
        if (
            !isSelectedLogue
            && didLyricRender
            && !couldRender
        ) {
            const { selectedVerseIndex } = this.props

            this.props.updateScrollLyricStore({
                scrollLyricLog: 'Rerender selected verse.',
                doScrollLyricByVerse: true,
                scrollLyricIndex: selectedVerseIndex,
                doScrollLyricImmediately: true
            })
        }
    }
    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: {
        isSelectedLogue,
        selectedVerseIndex,
        selectedAnnotationIndex
    },
    renderStore: {
        didCarouselRender,
        didLyricRender
    }
}) => ({
    isSelectedLogue,
    didCarouselRender,
    didLyricRender,
    selectedVerseIndex,
    selectedAnnotationIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderedStore,
        updateScrollCarouselStore,
        updateScrollLyricStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RenderListener)
