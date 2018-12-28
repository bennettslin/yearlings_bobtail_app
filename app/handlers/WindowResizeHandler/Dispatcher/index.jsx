// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderableStore } from 'flux/renderable/action'

class WindowResizeDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateRenderableStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    state = {
        windowResizeTimeoutId: ''
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchWindowResizeUnrenderable:
                this.dispatchWindowResizeUnrenderable
        })
    }

    dispatchWindowResizeUnrenderable = () => {
        this.props.updateRenderableStore({ isWindowResizeRenderable: false })

        // Clear previous timeout.
        clearTimeout(this.state.windowResizeTimeoutId)

        /**
         * Wait for window resize to finish.
         */
        const windowResizeTimeoutId = setTimeout(
            this._dispatchWindowResizeRenderable, 500
        )

        this.setState({
            windowResizeTimeoutId
        })
    }

    _dispatchWindowResizeRenderable = () => {
        this.props.updateRenderableStore({ isWindowResizeRenderable: true })
    }

    render() {
        return null
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    { updateRenderableStore }
)(WindowResizeDispatcher)
