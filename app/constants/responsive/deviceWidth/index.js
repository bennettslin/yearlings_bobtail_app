import {
    CSS_LENGTH_ICON,
    CSS_LENGTH_ICON_LARGE,
    CSS_LENGTH_ICON_LARGE_TABLET,
    CSS_LENGTH_ICON_LARGE_MINI,
    CSS_MARGIN_THIN
} from '..'
import { JS_HEIGHT_NAV } from '../../../scss/constants/nav'
import {
    CSS_COUNT_GAPS_SINGLE,
    CSS_COUNT_GAPS_DOUBLE
} from '../../../components/Nav/variables'
import { getJavascriptFromSassVariable } from '../../../helpers/format'

export const BANNER_SMALL_TEXT_WIDTH = 400 // Eyeballed.
export const LS_WIDTH_GOLDEN_CORD = 745
export const LS_WIDTH_UNCANNY_VALLEY = 570
export const LS_WIDTH_MENU_BREAKPOINT = 720

/**************
 * NAV VALUES *
 **************/

export const CSS_HEIGHT_NAV = getJavascriptFromSassVariable(JS_HEIGHT_NAV)

const
    // Keep for now.
    LS_MARGIN_NAV_LAST_TITLE = 0,

    SHRINK_ICON_DIAMETER = 36,

    DOUBLE_COLUMN_STATIC_BREAKPOINT =
        CSS_LENGTH_ICON * 20
        + CSS_MARGIN_THIN * 10
        + CSS_COUNT_GAPS_DOUBLE,
    DOUBLE_COLUMN_SHRINK_BREAKPOINT =
        SHRINK_ICON_DIAMETER * 20
        + CSS_MARGIN_THIN * 10
        + CSS_COUNT_GAPS_DOUBLE,
    SINGLE_COLUMN_STATIC_BREAKPOINT =
        CSS_LENGTH_ICON * 11
        + CSS_MARGIN_THIN * 8
        + CSS_COUNT_GAPS_SINGLE

/************************
 * DEVICE WIDTH CONFIGS *
 ************************/

export const PHONE_WIDTH_KEY = 'phone'
export const LS_MINI_WIDTH_KEY = 'mini'
export const TABLET_WIDTH_KEY = 'tablet'
export const LS_LAPTOP_WIDTH_KEY = 'laptop'
export const MONITOR_WIDTH_KEY = 'monitor'

const PHONE_WIDTH_CONFIG = {
    deviceWidthKey: PHONE_WIDTH_KEY,
    maxWidth: 475
}
export const MINI_WIDTH_CONFIG = {
    deviceWidthKey: LS_MINI_WIDTH_KEY,
    maxWidth: LS_WIDTH_MENU_BREAKPOINT,
    singleColumnStaticBreakpoint:
        SINGLE_COLUMN_STATIC_BREAKPOINT
        + CSS_LENGTH_ICON_LARGE_MINI
}
const TABLET_WIDTH_CONFIG = {
    deviceWidthKey: TABLET_WIDTH_KEY,
    maxWidth: 1100,
    doubleColumnStaticBreakpoint:
        DOUBLE_COLUMN_STATIC_BREAKPOINT
        + CSS_LENGTH_ICON_LARGE_TABLET,
    doubleColumnShrinkBreakpoint:
        DOUBLE_COLUMN_SHRINK_BREAKPOINT
        + CSS_LENGTH_ICON_LARGE_TABLET,
    singleColumnStaticBreakpoint:
        SINGLE_COLUMN_STATIC_BREAKPOINT
        + CSS_LENGTH_ICON_LARGE_TABLET
}
const LAPTOP_WIDTH_CONFIG = {
    deviceWidthKey: LS_LAPTOP_WIDTH_KEY,
    maxWidth: 1400,
    singleColumnStaticBreakpoint:
        SINGLE_COLUMN_STATIC_BREAKPOINT
        + LS_MARGIN_NAV_LAST_TITLE
        + LS_WIDTH_UNCANNY_VALLEY
        + CSS_LENGTH_ICON_LARGE
}
const MONITOR_WIDTH_CONFIG = {
    deviceWidthKey: MONITOR_WIDTH_KEY,
    doubleColumnStaticBreakpoint:
        DOUBLE_COLUMN_STATIC_BREAKPOINT
        + LS_MARGIN_NAV_LAST_TITLE
        + LS_WIDTH_GOLDEN_CORD
        + CSS_LENGTH_ICON_LARGE,
    doubleColumnShrinkBreakpoint:
        DOUBLE_COLUMN_SHRINK_BREAKPOINT
        + LS_MARGIN_NAV_LAST_TITLE
        + LS_WIDTH_GOLDEN_CORD
        + CSS_LENGTH_ICON_LARGE,
    singleColumnStaticBreakpoint:
        SINGLE_COLUMN_STATIC_BREAKPOINT
        + LS_MARGIN_NAV_LAST_TITLE
        + LS_WIDTH_GOLDEN_CORD
        + CSS_LENGTH_ICON_LARGE
}

export const DEVICE_WIDTH_CONFIGS = [
    PHONE_WIDTH_CONFIG,
    MINI_WIDTH_CONFIG,
    TABLET_WIDTH_CONFIG,
    LAPTOP_WIDTH_CONFIG,
    MONITOR_WIDTH_CONFIG,
    {} // Default when app mounts.
]
