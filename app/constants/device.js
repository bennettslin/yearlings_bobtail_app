import MobileDetect from 'mobile-detect'
import { getWindow } from '../utils/browser'

const md = new MobileDetect(getWindow().navigator.userAgent)

/**
 * FIXME: This uses user agent sniffing to detect whether this is a
 * mobile device, assuming that mobile devices have lower processing
 * power. This approach is not accurate to begin with, and very much
 * not future-proof!
 */
export const IS_USER_AGENT_DESKTOP = !md.mobile()

// http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
export const IS_TOUCH_SUPPORTED =
    'ontouchstart' in getWindow() ||
    getWindow().navigator.maxTouchPoints > 0 ||
    getWindow().navigator.msMaxTouchPoints > 0

// https://stackoverflow.com/a/19999868
export const IS_DEPRECATED_BROWSER =
    getWindow().navigator.userAgent.indexOf('MSIE ') > 0 ||
    Boolean(getWindow().navigator.userAgent.match(/Trident.*rv:11\./))
