import Bowser from 'bowser'
import { getWindow } from '../utils/browser'

const { userAgent } = getWindow().navigator
export const {
    browser: {
        name: BROWSER_NAME,
        version: BROWSER_VERSION,
    } = {},
    engine: {
        name: ENGINE_NAME,
        version: ENGINE_VERSION,
    } = {},
    os: {
        name: OS_NAME,
        version: OS_VERSION,
    } = {},
    platform: {
        type: PLATFORM_TYPE,
        vendor: PLATFORM_VENDOR,
    } = {},
} = userAgent ? Bowser.parse(userAgent) : {}

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

export const logDevice = () => {
    logServe(`${BROWSER_NAME ? BROWSER_NAME : ''}${BROWSER_VERSION ? ` ${BROWSER_VERSION}` : ''},${ENGINE_NAME ? ` ${ENGINE_NAME}` : ''}${ENGINE_VERSION ? ` ${ENGINE_VERSION}` : ''},${OS_NAME ? ` ${OS_NAME}` : ''}${OS_VERSION ? ` ${OS_VERSION}` : ''},${PLATFORM_VENDOR ? ` ${PLATFORM_VENDOR}` : ''}${PLATFORM_TYPE ? ` ${PLATFORM_TYPE}` : ''}.`)
}
