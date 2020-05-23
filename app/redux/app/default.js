const
    _getIsTouchSupported = () => {
        const isTouchSupported =
                // http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0

        return isTouchSupported
    }

export const APP_DEFAULTS = {
    isTouchSupported: _getIsTouchSupported()
}
