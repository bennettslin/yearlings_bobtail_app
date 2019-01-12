// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateMobileStore } from 'flux/mobile/action'

class MobileListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateMobileStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._checkDeviceSupport()
    }

    _checkDeviceSupport() {
        const
            isTouchSupported =
                // http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0,

            isWheelSupported =
                'onwheel' in window

        this.props.updateMobileStore({
            // TODO: Is this the best way to get only touchscreen devices?
            isOnlyTouchSupported:
                isTouchSupported &&
                !isWheelSupported,

            isTouchSupported,
            isWheelSupported
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    { updateMobileStore }
)(MobileListener)
