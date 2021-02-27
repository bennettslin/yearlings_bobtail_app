import { getWindow } from '../utils/browser'
import { PLATFORM_TYPE } from '../utils/device'

/**
 * NOTE: This uses user agent sniffing to detect whether this is a desktop and
 * not a mobile device, assuming that mobile devices have lower processing
 * power. This approach is not accurate to begin with, and very much not
 * future-proof!
 */
export const IS_USER_AGENT_DESKTOP = PLATFORM_TYPE === 'desktop'

// http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
export const IS_TOUCH_SUPPORTED =
    'ontouchstart' in getWindow() ||
    getWindow().navigator.maxTouchPoints > 0 ||
    getWindow().navigator.msMaxTouchPoints > 0
