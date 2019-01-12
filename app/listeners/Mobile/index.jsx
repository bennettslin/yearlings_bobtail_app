// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateMobileStore } from 'flux/mobile/action'
import MobileDetect from 'mobile-detect'

class MobileListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateMobileStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        this._checkDesktopProcessor()
        this._checkDeviceSupport()
    }

    _checkDesktopProcessor() {
        /**
         * FIXME: This uses user agent sniffing to detect whether this is a
         * mobile device, assuming that mobile devices have low processing
         * power. This approach is very not future-proof!
         */

        const
            md = new MobileDetect(window.navigator.userAgent),
            isMobileDevice = md.mobile()

        this.props.updateMobileStore({ isDesktopProcessor: !isMobileDevice })
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
