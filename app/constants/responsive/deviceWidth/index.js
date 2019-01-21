import {
    LS_LENGTH_ICON,
    LS_LENGTH_ICON_LARGE,
    LS_LENGTH_ICON_LARGE_TABLET,
    LS_LENGTH_ICON_LARGE_MINI,
    LS_MARGIN_THIN
} from '..'

export const LS_WIDTH_GOLDEN_CORD = 745
export const LS_WIDTH_UNCANNY_VALLEY = 570
export const LS_WIDTH_MENU_BREAKPOINT = 720

/**************
 * NAV VALUES *
 **************/

export const LS_HEIGHT_NAV =
    LS_LENGTH_ICON
    + LS_MARGIN_THIN * 2

const
    // Keep for now.
    LS_MARGIN_NAV_LAST_TITLE = 0,

    LS_COUNT_GAPS_DOUBLE = 26,
    LS_COUNT_GAPS_SINGLE = 16,

    SHRINK_ICON_DIAMETER = 36,

    DOUBLE_COLUMN_STATIC_BREAKPOINT =
        LS_LENGTH_ICON * 20
        + LS_MARGIN_THIN * 10
        + LS_COUNT_GAPS_DOUBLE,
    DOUBLE_COLUMN_SHRINK_BREAKPOINT =
        SHRINK_ICON_DIAMETER * 20
        + LS_MARGIN_THIN * 10
        + LS_COUNT_GAPS_DOUBLE,
    SINGLE_COLUMN_STATIC_BREAKPOINT =
        LS_LENGTH_ICON * 11
        + LS_MARGIN_THIN * 8
        + LS_COUNT_GAPS_SINGLE

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
        + LS_LENGTH_ICON_LARGE_MINI
}
const TABLET_WIDTH_CONFIG = {
    deviceWidthKey: TABLET_WIDTH_KEY,
    maxWidth: 1100,
    doubleColumnStaticBreakpoint:
        DOUBLE_COLUMN_STATIC_BREAKPOINT
        + LS_LENGTH_ICON_LARGE_TABLET,
    doubleColumnShrinkBreakpoint:
        DOUBLE_COLUMN_SHRINK_BREAKPOINT
        + LS_LENGTH_ICON_LARGE_TABLET,
    singleColumnStaticBreakpoint:
        SINGLE_COLUMN_STATIC_BREAKPOINT
        + LS_LENGTH_ICON_LARGE_TABLET
}
const LAPTOP_WIDTH_CONFIG = {
    deviceWidthKey: LS_LAPTOP_WIDTH_KEY,
    maxWidth: 1400,
    singleColumnStaticBreakpoint:
        SINGLE_COLUMN_STATIC_BREAKPOINT
        + LS_MARGIN_NAV_LAST_TITLE
        + LS_WIDTH_UNCANNY_VALLEY
        + LS_LENGTH_ICON_LARGE
}
const MONITOR_WIDTH_CONFIG = {
    deviceWidthKey: MONITOR_WIDTH_KEY,
    doubleColumnStaticBreakpoint:
        DOUBLE_COLUMN_STATIC_BREAKPOINT
        + LS_MARGIN_NAV_LAST_TITLE
        + LS_WIDTH_GOLDEN_CORD
        + LS_LENGTH_ICON_LARGE,
    doubleColumnShrinkBreakpoint:
        DOUBLE_COLUMN_SHRINK_BREAKPOINT
        + LS_MARGIN_NAV_LAST_TITLE
        + LS_WIDTH_GOLDEN_CORD
        + LS_LENGTH_ICON_LARGE,
    singleColumnStaticBreakpoint:
        SINGLE_COLUMN_STATIC_BREAKPOINT
        + LS_MARGIN_NAV_LAST_TITLE
        + LS_WIDTH_GOLDEN_CORD
        + LS_LENGTH_ICON_LARGE
}

export const DEVICE_WIDTH_CONFIGS = [
    PHONE_WIDTH_CONFIG,
    MINI_WIDTH_CONFIG,
    TABLET_WIDTH_CONFIG,
    LAPTOP_WIDTH_CONFIG,
    MONITOR_WIDTH_CONFIG,
    {} // Default when app mounts.
]
