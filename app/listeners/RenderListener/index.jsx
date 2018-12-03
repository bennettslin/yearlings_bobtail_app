// Singleton to listen for change from song to logue.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

class RenderListener extends PureComponent {

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
        const {
                isSceneChangeRenderable,
                isSongChangeRenderable,
                isWindowResizeRenderable
            } = this.props,

            {
                isSceneChangeRenderable: wasSceneChangeRenderable,
                isSongChangeRenderable: wasSongChangeRenderable,
                isWindowResizeRenderable: wasWindowResizeRenderable
            } = prevProps

        // Is unrenderable after window resize.
        if (!isWindowResizeRenderable && wasWindowResizeRenderable) {
            this.unrenderedTime = Date.now()

            logger.warn('Live unrenderable from window resize.')
            this.props.updateRenderStore({
                canTheatreRender: false
            })

        /**
         * Is renderable after window resize timeout. Also called upon initial
         * render.
         */
        } else if (isWindowResizeRenderable && !wasWindowResizeRenderable) {
            logger.warn(`Live renderable after window resize, took ${
                ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
            } seconds.`)

            this.props.updateRenderStore({
                canTheatreRender: true
            })
        }

        // Is unrenderable after song change.
        if (!isSongChangeRenderable && wasSongChangeRenderable) {
            this.unrenderedTime = Date.now()

            logger.warn('Live unrenderable from song change.')
            this.props.updateRenderStore({
                canVerseRender: false,
                didVerseRender: false,
                canSceneRender: false,
                didSceneRender: false,
                canMainRender: false,
                didMainRender: false,
                canLyricRender: false,
                didLyricRender: false,
                canCarouselRender: false,
                didCarouselRender: false
            })

        // Is renderable after song change timeout.
        } else if (isSongChangeRenderable && !wasSongChangeRenderable) {

            // Don't call this upon initial render.
            if (this.props.canTheatreRender) {
                logger.warn(`Live renderable after song change, took ${
                    ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
                } seconds.`)

                this.props.updateRenderStore({
                    canVerseRender: true
                })
            }
        }

        // Is unrenderable after scene change within same song.
        if (!isSceneChangeRenderable && wasSceneChangeRenderable) {
            this.unrenderedTime = Date.now()

            logger.warn('Live unrenderable from scene change.')
            this.props.updateRenderStore({
                canSceneRender: false,
                didSceneRender: false
            })

        // Is renderable after scene change timeout.
        } else if (isSceneChangeRenderable && !wasSceneChangeRenderable) {

            // Don't call this upon initial render.
            if (this.props.canTheatreRender) {
                logger.warn(`Live renderable after scene change, took ${
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

export default connect(mapStateToProps, bindDispatchToProps)(RenderListener)
