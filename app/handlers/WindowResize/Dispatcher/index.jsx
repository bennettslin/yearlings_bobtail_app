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
        window.onresize = debounce(this._dispatchWindowResizeInFlux, 0)
    }

    componentWillUnmount() {
        window.onresize = null
    }

    _dispatchWindowResizeInFlux = () => {
        this.props.updateChangeStore({ isWindowResizeInFlux: true })

        // Clear previous timeout.
        clearTimeout(this.state.windowResizeTimeoutId)

        /**
         * Wait for window resize to finish.
         */
        const windowResizeTimeoutId = setTimeout(
            this._dispatchWindowResizeComplete, 250
        )

        this.setState({
            windowResizeTimeoutId
        })
    }

    _dispatchWindowResizeComplete = () => {
        this.props.updateChangeStore({ isWindowResizeInFlux: false })
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
