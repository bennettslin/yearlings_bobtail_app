// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderStore } from 'flux/render/action'

class WindowResizeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isWindowResizing: PropTypes.bool.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._handleWindowFinishedResizing()
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

        } else if (!isWindowResizing && wasWindowResizing) {
            this._handleWindowFinishedResizing()
        }
    }

    _handleWindowResizing() {
        this.props.updateRenderStore({
            canTheatreRender: false,
            didTheatreRender: false
        })
    }

    _handleWindowFinishedResizing() {
        this.props.updateRenderStore({
            canTheatreRender: true
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
    { updateRenderStore }
)(WindowResizeListener)
