import {
    CSS_LENGTH_ICON,
    CSS_LENGTH_ICON_LARGE,
    CSS_LENGTH_ICON_LARGE_TABLET,
    CSS_LENGTH_ICON_LARGE_MINI,
    CSS_MARGIN_THIN
} from '..'
import {
    COUNT_GAPS_SINGLE,
    COUNT_GAPS_DOUBLE,
    HEIGHT_NAV,
    WIDTH_LAPTOP,
    WIDTH_MENU_BREAKPOINT,
    WIDTH_GOLDEN_CORD,
    WIDTH_UNCANNY_VALLEY
} from '../../../scss/exports/style'

import { getJsFromSass } from '../../../helpers/format'

export const BANNER_SMALL_TEXT_WIDTH = 400 // Eyeballed.
export const CSS_WIDTH_GOLDEN_CORD = getJsFromSass(WIDTH_GOLDEN_CORD)
export const CSS_WIDTH_UNCANNY_VALLEY = getJsFromSass(WIDTH_UNCANNY_VALLEY)
export const CSS_WIDTH_MENU_BREAKPOINT = getJsFromSass(WIDTH_MENU_BREAKPOINT)

/**************
 * NAV VALUES *
 **************/

export const CSS_HEIGHT_NAV = getJsFromSass(HEIGHT_NAV)

const
    SHRINK_ICON_DIAMETER = 36,

    DOUBLE_COLUMN_STATIC_BREAKPOINT =
        CSS_LENGTH_ICON * 20
        + CSS_MARGIN_THIN * 10
        + parseInt(COUNT_GAPS_DOUBLE),
    DOUBLE_COLUMN_SHRINK_BREAKPOINT =
        SHRINK_ICON_DIAMETER * 20
        + CSS_MARGIN_THIN * 10
        + parseInt(COUNT_GAPS_DOUBLE),
    SINGLE_COLUMN_STATIC_BREAKPOINT =
        CSS_LENGTH_ICON * 11
        + CSS_MARGIN_THIN * 8
        + parseInt(COUNT_GAPS_SINGLE)

/************************
 * DEVICE WIDTH CONFIGS *
 ************************/

export const PHONE_WIDTH_KEY = 'phone'
export const MINI_WIDTH_KEY = 'mini'
export const TABLET_WIDTH_KEY = 'tablet'
export const LAPTOP_WIDTH_KEY = 'laptop'
export const MONITOR_WIDTH_KEY = 'monitor'

const PHONE_WIDTH_CONFIG = {
    deviceWidthKey: PHONE_WIDTH_KEY,
    maxWidth: 475
}
export const MINI_WIDTH_CONFIG = {
    deviceWidthKey: MINI_WIDTH_KEY,
    maxWidth: CSS_WIDTH_MENU_BREAKPOINT,
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
    deviceWidthKey: LAPTOP_WIDTH_KEY,
    maxWidth: getJsFromSass(WIDTH_LAPTOP),
    singleColumnStaticBreakpoint:
        SINGLE_COLUMN_STATIC_BREAKPOINT
        + CSS_WIDTH_UNCANNY_VALLEY
        + CSS_LENGTH_ICON_LARGE
}
const MONITOR_WIDTH_CONFIG = {
    deviceWidthKey: MONITOR_WIDTH_KEY,
    doubleColumnStaticBreakpoint:
        DOUBLE_COLUMN_STATIC_BREAKPOINT
        + CSS_WIDTH_GOLDEN_CORD
        + CSS_LENGTH_ICON_LARGE,
    doubleColumnShrinkBreakpoint:
        DOUBLE_COLUMN_SHRINK_BREAKPOINT
        + CSS_WIDTH_GOLDEN_CORD
        + CSS_LENGTH_ICON_LARGE,
    singleColumnStaticBreakpoint:
        SINGLE_COLUMN_STATIC_BREAKPOINT
        + CSS_WIDTH_GOLDEN_CORD
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
