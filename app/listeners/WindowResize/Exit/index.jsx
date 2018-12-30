import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import { connect } from 'react-redux'
import { updateChangeStore } from 'flux/change/action'
import { updateDeviceStore } from 'flux/device/action'
import { updateRenderStore } from 'flux/render/action'

class WindowResizeExitListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateChangeStore: PropTypes.func.isRequired,
        updateDeviceStore: PropTypes.func.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    state = {
        windowResizeTimeoutId: ''
    }

    componentDidMount() {
        window.onresize = debounce(this._beginExitTransition, 0)
    }

    componentWillUnmount() {
        window.onresize = null
    }

    _beginExitTransition = () => {
        this.props.updateChangeStore({ isWindowResizeInFlux: true })
        this.props.updateDeviceStore({ canTheatreEnter: false })
        this.props.updateRenderStore({ didTheatreEnter: false })

        // Clear previous timeout.
        clearTimeout(this.state.windowResizeTimeoutId)

        /**
         * Wait for window resize to finish.
         */
        const windowResizeTimeoutId = setTimeout(
            this._completeWindowResize, 250
        )

        this.setState({
            windowResizeTimeoutId
        })
    }

    _completeWindowResize = () => {
        this.props.updateChangeStore({ isWindowResizeInFlux: false })
    }

    render() {
        return null
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    {
        updateChangeStore,
        updateDeviceStore,
        updateRenderStore
    }
)(WindowResizeExitListener)
