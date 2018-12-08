// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

class DidRenderListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        didTheatreRender: PropTypes.bool.isRequired,
        canVerseRender: PropTypes.bool.isRequired,
        didVerseRender: PropTypes.bool.isRequired,
        didSceneRender: PropTypes.bool.isRequired,
        didLyricRender: PropTypes.bool.isRequired,
        didCarouselRender: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkTheatreDidRender(prevProps)
        this._checkVerseDidRender(prevProps)
        this._checkSceneDidRender(prevProps)
        this._checkLyricDidRender(prevProps)
        this._checkCarouselDidRender()
    }

    _checkTheatreDidRender(prevProps) {
        /**
         * If theatre is rendering for the first time upon load, verse will not
         * be rendered. If it is being rendered again after window resize,
         * verse will be rendered. Not the most elegant way to handle this...
         */
        const
            {
                canVerseRender,
                didTheatreRender
            } = this.props,
            { didTheatreRender: hadTheatreRendered } = prevProps

        if (!canVerseRender && didTheatreRender && !hadTheatreRendered) {
            this.props.updateRenderStore({
                canVerseRender: true
            })
        }
    }

    _checkVerseDidRender(prevProps) {
        const
            { didVerseRender } = this.props,
            { didVerseRender: hadVerseRendered } = prevProps

        if (didVerseRender && !hadVerseRendered) {
            this.props.updateRenderStore({
                canSceneRender: true
            })
        }
    }

    _checkSceneDidRender(prevProps) {
        /**
         * If scene is rendering for the first time upon load, lyric will not
         * be rendered. If it is being rendered again after scene change, lyric
         * will be rendered. Again, not the most elegant way to handle this...
         */
        const
            {
                canLyricRender,
                didSceneRender
            } = this.props,
            { didSceneRender: hadSceneRendered } = prevProps

        if (!canLyricRender && didSceneRender && !hadSceneRendered) {
            this.props.updateRenderStore({
                canLyricRender: true
            })
        }
    }

    _checkLyricDidRender(prevProps) {
        const
            { didLyricRender } = this.props,
            { didLyricRender: hadLyricRendered } = prevProps

        if (didLyricRender && !hadLyricRendered) {
            this.props.updateRenderStore({
                canCarouselRender: true
            })
        }
    }

    _checkCarouselDidRender() {
        logger.warn('Live rendered.')
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    renderStore: {
        didTheatreRender,
        canVerseRender,
        didVerseRender,
        didSceneRender,
        didLyricRender,
        didCarouselRender
    }
}) => ({
    didTheatreRender,
    canVerseRender,
    didVerseRender,
    didSceneRender,
    didLyricRender,
    didCarouselRender
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(DidRenderListener)
