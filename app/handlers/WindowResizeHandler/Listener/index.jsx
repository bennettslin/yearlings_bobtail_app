// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderStore } from 'flux/render/action'

class WindowResizeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isWindowResizeRenderable: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.unrenderedTime = Date.now()
    }

    componentDidUpdate(prevProps) {
        this._checkWindowResize(prevProps)
    }

    _checkWindowResize(prevProps) {
        const
            { isWindowResizeRenderable } = this.props,
            { isWindowResizeRenderable: wasWindowResizeRenderable } = prevProps

        // Is unrenderable after window resize.
        if (!isWindowResizeRenderable && wasWindowResizeRenderable) {
            this._handleWindowResizeUnrenderable()

        /**
         * Is renderable after window resize timeout. Also called upon initial
         * render.
         */
        } else if (isWindowResizeRenderable && !wasWindowResizeRenderable) {
            this._handleWindowResizeRenderable()
        }
    }

    _handleWindowResizeUnrenderable() {
        this.unrenderedTime = Date.now()

        logRenderable('Unrenderable from window resize.')
        this.props.updateRenderStore({
            canTheatreRender: false,
            didTheatreRender: false
        })
    }

    _handleWindowResizeRenderable() {
        logRenderable(`Renderable after window resize, took ${
            ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
        } seconds.`)

        this.props.updateRenderStore({
            canTheatreRender: true
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    renderableStore: {
        isWindowResizeRenderable
    }
}) => ({
    isWindowResizeRenderable
})

export default connect(
    mapStateToProps,
    { updateRenderStore }
)(WindowResizeListener)
