// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollCarouselStore } from '../../redux/scrollCarousel/action'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import {
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../redux/selected/selectors'

const mapStateToProps = state => {
    const {
            entranceStore: {
                didCarouselEnter,
                didLyricEnter
            }
        } = state,
        selectedAnnotationIndex = mapSelectedAnnotationIndex(state),
        isSelectedLogue = mapIsSelectedLogue(state)

    return {
        isSelectedLogue,
        didCarouselEnter,
        didLyricEnter,
        selectedAnnotationIndex
    }
}

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
        this._checkCarouselEntered(prevProps)
        this._checkLyricEntered(prevProps)
    }

    _checkCarouselEntered = (prevProps) => {
        const
            {
                isSelectedLogue,
                didCarouselEnter
            } = this.props,
            { didCarouselEnter: hadCarouselEntered } = prevProps

        if (
            !isSelectedLogue
            && didCarouselEnter
            && !hadCarouselEntered
        ) {
            const { selectedAnnotationIndex } = this.props

            // Scroll to carousel annotation if toggled on.
            this.props.updateScrollCarouselStore({
                queuedScrollCarouselLog: 'Carousel entered.',
                queuedScrollCarouselIndex: selectedAnnotationIndex,
                queuedScrollCarouselNoDuration: true
            })
        }
    }

    _checkLyricEntered = (prevProps) => {
        const
            {
                isSelectedLogue,
                didLyricEnter
            } = this.props,
            { didLyricEnter: hadLyricEntered } = prevProps

        if (
            !isSelectedLogue
            && didLyricEnter
            && !hadLyricEntered
        ) {
            this.props.updateScrollLyricStore({
                queuedScrollLyricLog: 'Lyric entered.',
                queuedScrollLyricByVerse: true,
                queuedScrollLyricNoDuration: true,
                queuedScrollLyricAlways: true,
                queuedSceneChangeExitScrollCallback: true
            })
        }
    }
    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        updateScrollCarouselStore,
        updateScrollLyricStore
    }
)(ScrollRenderListener)
