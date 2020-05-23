import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import { connect } from 'react-redux'

import ResizeDispatcher from '../Dispatcher'

import { resetTheatreEntrance } from '../../../redux/entrance/action'
import { getWindowDimensions } from '../../../helpers/resize/device'
import { populateRefs } from '../../../helpers/ref'

class ResizeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        windowHeight: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,
        resetTheatreEntrance: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    state = {
        windowResizeTimeoutId: ''
    }

    componentDidMount() {
        this.props.getRefs({ passRootContainer: this.passRootContainer })
        window.onresize = debounce(this._checkIfGenuineResize, 0)
    }

    componentWillUnmount() {
        window.onresize = null
    }

    passRootContainer = (node) => {
        this.rootElement = node
        this.setRootContainer(node)
    }

    _checkIfGenuineResize = () => {
        /**
         * This check is needed because iOS will arbitrarily set window height
         * based on whether browser header and footer are shown. So we'll use
         * the height of the root element to be the official window height.
         * Doing this in all cases for now, not just iOS, for simplicity.
         */
        const
            {
                windowHeight: newHeight,
                windowWidth: newWidth
            } = getWindowDimensions(this.rootElement),
            {
                windowHeight,
                windowWidth
            } = this.props

        if (
            newHeight !== windowHeight ||
            newWidth !== windowWidth
        ) {
            this._beginExitTransition()
        }

    }

    _beginExitTransition() {
        this.props.resetTheatreEntrance()

        // Clear previous timeout.
        clearTimeout(this.state.windowResizeTimeoutId)

        /**
         * Wait for window resize to finish.
         */
        const windowResizeTimeoutId = setTimeout(
            this.dispatchBeginEnterTransition, 250
        )

        this.setState({ windowResizeTimeoutId })
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <ResizeDispatcher {...{ getRefs: this._getRefs }} />
        )
    }
}

const mapStateToProps = ({
    viewportStore: {
        windowHeight,
        windowWidth
    }
}) => ({
    windowHeight,
    windowWidth
})

export default connect(
    mapStateToProps,
    { resetTheatreEntrance }
)(ResizeListener)
