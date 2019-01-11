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
    }

    _checkTouchSupport() {
        // http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
        const deviceSupportsTouch =
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0

        this.props.updateMobileStore({ deviceSupportsTouch })
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
