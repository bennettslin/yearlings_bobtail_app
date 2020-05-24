import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import { connect } from 'react-redux'

import ResizeDispatcher from '../Dispatcher'

import { resetTheatreEntrance } from '../../../redux/entrance/action'
import { getWindowDimensions } from '../../../helpers/resize/device'
import { getWindow } from '../../../utils/browser'

class ResizeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        windowHeight: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,
        resetTheatreEntrance: PropTypes.func.isRequired,

        // From parent.
        getRootElement: PropTypes.func.isRequired
    }

    state = {
        windowResizeTimeoutId: ''
    }

    componentDidMount() {
        getWindow().onresize = debounce(this._checkIfGenuineResize, 0)
    }

    componentWillUnmount() {
        getWindow().onresize = null
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
            } = getWindowDimensions(this.props.getRootElement()),
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
            this.beginEnterTransition, 250
        )

        this.setState({ windowResizeTimeoutId })
    }

    setBeginEnterTransition = beginEnterTransition => {
        this.beginEnterTransition = beginEnterTransition
    }

    render() {
        const { getRootElement } = this.props
        return (
            <ResizeDispatcher
                {...{
                    getRootElement,
                    getBeginEnterTransition: this.setBeginEnterTransition
                }}
            />
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
