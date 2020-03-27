// Constants prefixed with LS *must* be the same in Less.
import {
    JS_HEIGHT_MENU,
    JS_LENGTH_ICON,
    JS_LENGTH_ICON_LARGE,
    JS_LENGTH_ICON_LARGE_TABLET,
    JS_LENGTH_ICON_LARGE_MINI,
    JS_MARGIN_THIN,
    JS_OVERLAP_MARGIN_X_SLIDER,
    JS_PADDING_POPUP_CONTENT_WIDE
} from '../../scss/app'
import { getJsFromSass } from '../../helpers/format'

/*****************
 * SLIDER VALUES *
 *****************/

export const CSS_OVERLAP_MARGIN_X_SLIDER = getJsFromSass(JS_OVERLAP_MARGIN_X_SLIDER)

/***************
 * ICON VALUES *
 ***************/

export const CSS_LENGTH_ICON = getJsFromSass(JS_LENGTH_ICON)
export const CSS_LENGTH_ICON_LARGE = getJsFromSass(JS_LENGTH_ICON_LARGE)
export const CSS_LENGTH_ICON_LARGE_TABLET = getJsFromSass(JS_LENGTH_ICON_LARGE_TABLET)
export const CSS_LENGTH_ICON_LARGE_MINI = getJsFromSass(JS_LENGTH_ICON_LARGE_MINI)
export const CSS_MARGIN_THIN = getJsFromSass(JS_MARGIN_THIN)

/***************
 * MENU VALUES *
 ***************/

/**
 * This value only needs to accommodate the extra height added by the menu
 * button. It does not need to equal it exactly.
 */
const HEIGHT_MENU_BOTTOM_OFFSET = CSS_LENGTH_ICON_LARGE

export const CSS_HEIGHT_MENU = getJsFromSass(JS_HEIGHT_MENU)
export const HEIGHT_TWO_ROW_MENU =
    CSS_HEIGHT_MENU
    + HEIGHT_MENU_BOTTOM_OFFSET

/***************
 * MAIN VALUES *
 ***************/

export const HEIGHT_LYRIC_COLLAPSED = 0.32
export const HEIGHTLESS_LYRIC_MIN = 540
export const HEIGHTLESS_LYRIC_PHONE_MIN = 450
export const HEIGHTLESS_LYRIC_MAX = 720
export const MIN_HEIGHT_WINDOW_FOR_CAROUSEL_NAV = 400

/****************
 * POPUP VALUES *
 ****************/

const CSS_PADDING_POPUP_CONTENT_WIDE = getJsFromSass(JS_PADDING_POPUP_CONTENT_WIDE)
export const WIKI_SIDE_PADDING_TOTAL =
    CSS_PADDING_POPUP_CONTENT_WIDE * 2
    + CSS_LENGTH_ICON_LARGE * 2
