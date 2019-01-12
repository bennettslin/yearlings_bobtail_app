import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import { connect } from 'react-redux'
import { resetViewportForTransition } from 'flux/viewport/action'

import WindowResizeEnterDispatcher from '../Enter'

import { populateRefs } from 'helpers/ref'

class WindowResizeExitListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        resetViewportForTransition: PropTypes.func.isRequired
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
        this.props.resetViewportForTransition()

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
        this.dispatchBeginEnterTransition()
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <WindowResizeEnterDispatcher {...{ getRefs: this._getRefs }} />
        )
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    {
        resetViewportForTransition
    }
)(WindowResizeExitListener)
