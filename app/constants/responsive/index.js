// Constants prefixed with LS *must* be the same in Less.
import {
    JS_LENGTH_ICON,
    JS_LENGTH_ICON_LARGE,
    JS_LENGTH_ICON_LARGE_TABLET,
    JS_LENGTH_ICON_LARGE_MINI,
    JS_MARGIN_THIN
} from '../../scss/constants/global'
import { getJavascriptFromSassVariable } from '../../helpers/format'

/*****************
 * SLIDER VALUES *
 *****************/

export const LS_MARGIN_X_SLIDER = 3
export const LS_OVERLAP_MARGIN_X_SLIDER = 2

/***************
 * ICON VALUES *
 ***************/

export const CSS_LENGTH_ICON = getJavascriptFromSassVariable(JS_LENGTH_ICON)
export const CSS_LENGTH_ICON_LARGE = getJavascriptFromSassVariable(JS_LENGTH_ICON_LARGE)
export const CSS_LENGTH_ICON_LARGE_TABLET = getJavascriptFromSassVariable(JS_LENGTH_ICON_LARGE_TABLET)
export const CSS_LENGTH_ICON_LARGE_MINI = getJavascriptFromSassVariable(JS_LENGTH_ICON_LARGE_MINI)
export const CSS_MARGIN_THIN = getJavascriptFromSassVariable(JS_MARGIN_THIN)

/***************
 * MENU VALUES *
 ***************/

/**
 * This value only needs to accommodate the extra height added by the menu
 * button. It does not need to equal it exactly.
 */
const HEIGHT_MENU_BOTTOM_OFFSET = CSS_LENGTH_ICON_LARGE

export const LS_HEIGHT_MENU = 80
export const LS_HEIGHT_TWO_ROW_MENU =
    LS_HEIGHT_MENU
    + HEIGHT_MENU_BOTTOM_OFFSET

/***************
 * MAIN VALUES *
 ***************/

export const LS_HEIGHT_LYRIC_COLLAPSED = 0.32
export const HEIGHTLESS_LYRIC_MIN = 540
export const HEIGHTLESS_LYRIC_PHONE_MIN = 450
export const HEIGHTLESS_LYRIC_MAX = 720
export const MIN_HEIGHT_WINDOW_FOR_CAROUSEL_NAV = 400

/****************
 * POPUP VALUES *
 ****************/

const LS_PADDING_SIDE_POPUP_CONTENT = 20
export const WIKI_SIDE_PADDING_TOTAL =
    LS_PADDING_SIDE_POPUP_CONTENT * 2
    + CSS_LENGTH_ICON_LARGE * 2
