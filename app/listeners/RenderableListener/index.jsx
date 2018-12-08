// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

class RenderableListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        canTheatreRender: PropTypes.bool.isRequired,
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
            {
                isWindowResizeRenderable: wasWindowResizeRenderable
            } = prevProps

        // Is unrenderable after window resize.
        if (!isWindowResizeRenderable && wasWindowResizeRenderable) {
            this.unrenderedTime = Date.now()

            logger.warn('Unrenderable from window resize.')
            this.props.updateRenderStore({
                canTheatreRender: false
            })

        /**
         * Is renderable after window resize timeout. Also called upon initial
         * render.
         */
        } else if (isWindowResizeRenderable && !wasWindowResizeRenderable) {
            logger.warn(`Renderable after window resize, took ${
                ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
            } seconds.`)

            this.props.updateRenderStore({
                canTheatreRender: true
            })
        }
    }

    _checkSongChange(prevProps) {
        const
            { isSongChangeRenderable } = this.props,
            {
                isSongChangeRenderable: wasSongChangeRenderable
            } = prevProps

        // Is unrenderable after song change.
        if (!isSongChangeRenderable && wasSongChangeRenderable) {
            this.unrenderedTime = Date.now()

            logger.warn('Unrenderable from song change.')
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

            // Don't call this upon initial render.
            if (this.props.canTheatreRender) {
                logger.warn(`Renderable after song change, took ${
                    ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
                } seconds.`)

                this.props.updateRenderStore({
                    canSceneRender: true
                })
            }
        }
    }

    _checkSceneChange(prevProps) {
        const
            { isSceneChangeRenderable } = this.props,
            {
                isSceneChangeRenderable: wasSceneChangeRenderable
            } = prevProps

        // Is unrenderable after scene change within same song.
        if (!isSceneChangeRenderable && wasSceneChangeRenderable) {
            this.unrenderedTime = Date.now()

            logger.warn('Unrenderable from scene change.')
            this.props.updateRenderStore({
                canSceneRender: false,
                didSceneRender: false
            })

        // Is renderable after scene change timeout.
        } else if (isSceneChangeRenderable && !wasSceneChangeRenderable) {

            // Don't call this upon initial render.
            if (this.props.canTheatreRender) {
                logger.warn(`Renderable after scene change, took ${
                    ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
                } seconds.`)

                this.props.updateRenderStore({
                    canSceneRender: true
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
        canTheatreRender
    },
    renderableStore: {
        isSceneChangeRenderable,
        isSongChangeRenderable,
        isWindowResizeRenderable
    }
}) => ({
    canTheatreRender,
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
