import MobileDetect from 'mobile-detect'

const md = new MobileDetect(window.navigator.userAgent)

/**
 * FIXME: This uses user agent sniffing to detect whether this is a
 * mobile device, assuming that mobile devices have lower processing
 * power. This approach is not accurate to begin with, and very much
 * not future-proof!
 */
export const IS_USER_AGENT_DESKTOP = !md.mobile()

// http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
export const IS_TOUCH_SUPPORTED =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0

console.error(IS_USER_AGENT_DESKTOP, IS_TOUCH_SUPPORTED)
