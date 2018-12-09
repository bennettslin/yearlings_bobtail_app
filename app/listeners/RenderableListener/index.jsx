// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

import {
    THEATRE,
    getNextKeyToRender
} from '../../helpers/render'

import { RENDERABLE_STYLE } from '../../constants/log'

class RenderableListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSongChangeRenderable: PropTypes.bool.isRequired,
        isSceneChangeRenderable: PropTypes.bool.isRequired,
        isWindowResizeRenderable: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.unrenderedTime = Date.now()
    }

    componentDidUpdate(prevProps) {
        this._checkWindowResize(prevProps)
        this._checkSongChange(prevProps)
        this._checkSceneChange(prevProps)
    }

    _checkWindowResize(prevProps) {
        const
            { isWindowResizeRenderable } = this.props,
            { isWindowResizeRenderable: wasWindowResizeRenderable } = prevProps

        // Is unrenderable after window resize.
        if (!isWindowResizeRenderable && wasWindowResizeRenderable) {
            this.unrenderedTime = Date.now()

            logger.info('%cUnrenderable from window resize.', RENDERABLE_STYLE)
            this.props.updateRenderStore({
                canTheatreRender: false,
                didTheatreRender: false
            })

        /**
         * Is renderable after window resize timeout. Also called upon initial
         * render.
         */
        } else if (isWindowResizeRenderable && !wasWindowResizeRenderable) {
            logger.info(`%cRenderable after window resize, took ${
                ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
            } seconds.`, RENDERABLE_STYLE)

            this.props.updateRenderStore({
                canTheatreRender: true
            })
        }
    }

    _checkSongChange(prevProps) {
        const
            { isSongChangeRenderable } = this.props,
            { isSongChangeRenderable: wasSongChangeRenderable } = prevProps

        // Is unrenderable after song change.
        if (!isSongChangeRenderable && wasSongChangeRenderable) {
            this.unrenderedTime = Date.now()

            logger.info('%cUnrenderable from song change.', RENDERABLE_STYLE)
            this.props.updateRenderStore({
                canSceneRender: false,
                didSceneRender: false,
                canLyricRender: false,
                didLyricRender: false,
                canCarouselRender: false,
                didCarouselRender: false
            })

        // Is renderable after song change timeout.
        } else if (isSongChangeRenderable && !wasSongChangeRenderable) {
            logger.info(`%cRenderable after song change, took ${
                ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
            } seconds.`, RENDERABLE_STYLE)

            const nextKey = getNextKeyToRender({
                currentKey: THEATRE
            })
            this.props.updateRenderStore({
                [nextKey]: true
            })
        }
    }

    _checkSceneChange(prevProps) {
        const
            { isSceneChangeRenderable } = this.props,
            { isSceneChangeRenderable: wasSceneChangeRenderable } = prevProps

        // Is unrenderable after scene change within same song.
        if (!isSceneChangeRenderable && wasSceneChangeRenderable) {
            this.unrenderedTime = Date.now()

            logger.info('%cUnrenderable from scene change.', RENDERABLE_STYLE)
            this.props.updateRenderStore({
                canSceneRender: false,
                didSceneRender: false
            })

        // Is renderable after scene change timeout.
        } else if (isSceneChangeRenderable && !wasSceneChangeRenderable) {
            logger.info(`%cRenderable after scene change, took ${
                ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
            } seconds.`, RENDERABLE_STYLE)

            this.props.updateRenderStore({
                canSceneRender: true
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    renderableStore: {
        isSceneChangeRenderable,
        isSongChangeRenderable,
        isWindowResizeRenderable
    }
}) => ({
    isSceneChangeRenderable,
    isSongChangeRenderable,
    isWindowResizeRenderable
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RenderableListener)
