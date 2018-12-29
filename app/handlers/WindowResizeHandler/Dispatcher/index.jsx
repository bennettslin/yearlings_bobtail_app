import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import { connect } from 'react-redux'
import { updateWindowStore } from 'flux/window/action'

class WindowResizeDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateWindowStore: PropTypes.func.isRequired
    }

    state = {
        windowResizeTimeoutId: ''
    }

    componentDidMount() {
        window.onresize = debounce(this.dispatchWindowResizing, 0)
    }

    componentWillUnmount() {
        window.onresize = null
    }

    dispatchWindowResizing = () => {
        this.props.updateWindowStore({ isWindowResizing: true })

        // Clear previous timeout.
        clearTimeout(this.state.windowResizeTimeoutId)

        /**
         * Wait for window resize to finish.
         */
        const windowResizeTimeoutId = setTimeout(
            this._dispatchWindowResized, 250
        )

        this.setState({
            windowResizeTimeoutId
        })
    }

    _dispatchWindowResized = () => {
        this.props.updateWindowStore({ isWindowResizing: false })
    }

    render() {
        return null
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    { updateWindowStore }
)(WindowResizeDispatcher)
