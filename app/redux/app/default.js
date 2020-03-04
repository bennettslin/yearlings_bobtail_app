import MobileDetect from 'mobile-detect'

const
    _getIsUserAgentDesktop = () => {
        /**
         * FIXME: This uses user agent sniffing to detect whether this is a
         * mobile device, assuming that mobile devices have lower processing
         * power. This approach is not accurate to begin with, and very much
         * not future-proof!
         */
        const md = new MobileDetect(window.navigator.userAgent),
            isMobileDevice = md.mobile()

        return !isMobileDevice
    },

    _getIsTouchSupported = () => {
        const isTouchSupported =
                // http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0

        return isTouchSupported
    }

export const APP_DEFAULTS = {
    isUserAgentDesktop: _getIsUserAgentDesktop(),
    isTouchSupported: _getIsTouchSupported()
}
