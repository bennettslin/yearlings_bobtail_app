// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

import {
    THEATRE,
    SCENE,
    LYRIC,
    CAROUSEL,
    getNextKeyToRender
} from '../../helpers/render'

import { RENDER_STYLE } from '../../constants/log'

class RenderListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        didTheatreRender: PropTypes.bool.isRequired,
        didSceneRender: PropTypes.bool.isRequired,
        didLyricRender: PropTypes.bool.isRequired,
        didCarouselRender: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkTheatreDidRender(prevProps)
        this._checkSceneDidRender(prevProps)
        this._checkLyricDidRender(prevProps)
        this._checkCarouselDidRender(prevProps)
    }

    _checkTheatreDidRender(prevProps) {
        const
            { didTheatreRender } = this.props,
            { didTheatreRender: hadTheatreRendered } = prevProps

        if (didTheatreRender && !hadTheatreRendered) {
            logger.info('%cTheatre did render.', RENDER_STYLE)

            const nextKey = getNextKeyToRender({ currentKey: THEATRE })
            if (nextKey) {
                this.props.updateRenderStore({
                    [nextKey]: true
                })
            }
        }
    }

    _checkSceneDidRender(prevProps) {
        const
            { didSceneRender } = this.props,
            { didSceneRender: hadSceneRendered } = prevProps

        if (didSceneRender && !hadSceneRendered) {
            logger.info('%cScene did render.', RENDER_STYLE)

            const nextKey = getNextKeyToRender({ currentKey: SCENE })
            if (nextKey) {
                this.props.updateRenderStore({
                    [nextKey]: true
                })
            }
        }
    }

    _checkLyricDidRender(prevProps) {
        const
            { didLyricRender } = this.props,
            { didLyricRender: hadLyricRendered } = prevProps

        if (didLyricRender && !hadLyricRendered) {
            logger.info('%cLyric did render.', RENDER_STYLE)

            const nextKey = getNextKeyToRender({ currentKey: LYRIC })
            if (nextKey) {
                this.props.updateRenderStore({
                    [nextKey]: true
                })
            }
        }
    }

    _checkCarouselDidRender(prevProps) {
        const
            { didCarouselRender } = this.props,
            { didCarouselRender: hadCarouselRendered } = prevProps

        if (didCarouselRender && !hadCarouselRendered) {
            logger.info('%cCarousel did render.', RENDER_STYLE)

            const nextKey = getNextKeyToRender({ currentKey: CAROUSEL })
            if (nextKey) {
                this.props.updateRenderStore({
                    [nextKey]: true
                })
            }
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    renderStore: {
        didTheatreRender,
        didSceneRender,
        didLyricRender,
        didCarouselRender
    }
}) => ({
    didTheatreRender,
    didSceneRender,
    didLyricRender,
    didCarouselRender
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RenderListener)
