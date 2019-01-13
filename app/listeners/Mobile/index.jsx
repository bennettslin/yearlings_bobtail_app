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
        this._checkHigherProcessor()
        this._checkTouchSupport()
    }

    _checkHigherProcessor() {
        /**
         * FIXME: This uses user agent sniffing to detect whether this is a
         * mobile device, assuming that mobile devices have lower processing
         * power. This approach is not accurate to begin with, and very much
         * not future-proof!
         */

        const
            md = new MobileDetect(window.navigator.userAgent),
            isMobileDevice = md.mobile()

        this.props.updateMobileStore({ isHigherProcessor: !isMobileDevice })
    }

    _checkTouchSupport() {
        const
            isTouchSupported =
                // http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0

        this.props.updateMobileStore({ isTouchSupported })
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
