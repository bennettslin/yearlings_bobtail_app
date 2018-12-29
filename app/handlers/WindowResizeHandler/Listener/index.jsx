// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateDeviceStore } from 'flux/device/action'
import { updateRenderStore } from 'flux/render/action'

class WindowResizeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isWindowResizing: PropTypes.bool.isRequired,
        updateDeviceStore: PropTypes.func.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkWindowResizing(prevProps)
    }

    _checkWindowResizing(prevProps = {}) {
        const
            { isWindowResizing } = this.props,
            { isWindowResizing: wasWindowResizing } = prevProps

        // Is unrenderable after window resize.
        if (isWindowResizing && !wasWindowResizing) {
            this._handleWindowResizing()
        }
    }

    _handleWindowResizing() {
        this.props.updateDeviceStore({
            canTheatreRender: false
        })
        this.props.updateRenderStore({
            didTheatreRender: false
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    windowStore: { isWindowResizing }
}) => ({
    isWindowResizing
})

export default connect(
    mapStateToProps,
    {
        updateDeviceStore,
        updateRenderStore
    }
)(WindowResizeListener)
