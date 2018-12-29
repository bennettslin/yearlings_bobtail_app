import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import { connect } from 'react-redux'
import { updateChangeStore } from 'flux/change/action'

class WindowResizeDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateChangeStore: PropTypes.func.isRequired
    }

    state = {
        windowResizeTimeoutId: ''
    }

    componentDidMount() {
        window.onresize = debounce(this._dispatchWindowResizing, 0)
    }

    componentWillUnmount() {
        window.onresize = null
    }

    _dispatchWindowResizing = () => {
        this.props.updateChangeStore({ isWindowResizing: true })

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
        this.props.updateChangeStore({ isWindowResizing: false })
    }

    render() {
        return null
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    { updateChangeStore }
)(WindowResizeDispatcher)
