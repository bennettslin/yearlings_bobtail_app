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
        this._checkTouchSupport()
        this._checkWheelSupport()
    }

    _checkTouchSupport() {
        // http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
        const isTouchSupported =
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0

        this.props.updateMobileStore({ isTouchSupported })
    }

    _checkWheelSupport() {
        const isWheelSupported =
            'onwheel' in window

        this.props.updateMobileStore({ isWheelSupported })
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
