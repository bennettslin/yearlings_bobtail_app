import isUndefined from 'lodash/isundefined'

import { getSongTitle } from '../../album/api/songs'

import {
    ABOUT_BUTTON_KEY,
    AUDIO_NEXT_BUTTON_KEY,
    AUDIO_OPTIONS_BUTTON_KEY,
    AUDIO_PLAY_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY,
    AUDIO_FAST_FORWARD_BUTTON_KEY,
    AUDIO_REWIND_BUTTON_KEY,
    // CAROUSEL_NAV_BUTTON_KEY,
    CAROUSEL_PREVIOUS_BUTTON_KEY,
    CAROUSEL_NEXT_BUTTON_KEY,
    DOTS_SLIDE_BUTTON_KEY,
    DOTS_SLIDE_SELECT_BUTTON_KEY,
    LYRIC_EAR_BUTTON_KEY,
    LYRIC_EXPAND_BUTTON_KEY,
    LYRIC_SCROLL_BUTTON_KEY,
    NAV_BOOK_BUTTON_KEY,
    NAV_SONG_BUTTON_KEY,
    // OVERVIEW_BUTTON_KEY,
    POPUP_CLOSE_BUTTON_KEY,
    POPUP_NEXT_BUTTON_KEY,
    POPUP_PREVIOUS_BUTTON_KEY,
    WORMHOLE_BUTTON_KEY,
    SCORES_BUTTON_KEY
    // TIPS_BUTTON_KEY
} from '../../constants/buttons'

import {
    LEFT,
    RIGHT
} from '../../constants/lyrics'

import {
    SHOWN,
    HIDDEN,
    DISABLED,
    IS_CAROUSEL_SHOWN,
    IS_NAV_SHOWN,
    IS_NEITHER_SHOWN
} from '../../constants/options'

const
    TOP = 'top',
    BOTTOM = 'bottom',

    TOOLTIP_TEXT_MAP = {
        [ABOUT_BUTTON_KEY]: 'about Bobtail Yearlings',
        get audioOptions() {
            return {
                0: 'continuous play',
                1: 'repeated play'
            }
        },
        get audioPlay() {
            return {
                [false]: 'play',
                [true]: 'pause'
            }
        },
        [AUDIO_PREVIOUS_BUTTON_KEY]: 'previous track',
        [AUDIO_NEXT_BUTTON_KEY]: 'next track',
        [AUDIO_REWIND_BUTTON_KEY]: 'rewind',
        [AUDIO_FAST_FORWARD_BUTTON_KEY]: 'fast forward',
        get carouselNav() {
            return {
                [IS_CAROUSEL_SHOWN]: 'annotation carousel',
                [IS_NAV_SHOWN]: 'album navigation',
                [IS_NEITHER_SHOWN]: 'show annotation carousel'
            }
        },
        [CAROUSEL_PREVIOUS_BUTTON_KEY]: 'previous annotation',
        [CAROUSEL_NEXT_BUTTON_KEY]: 'next annotation',
        [DOTS_SLIDE_BUTTON_KEY]: 'annotation toggles',
        get lyricEar() {
            return {
                [LEFT]: 'left speaker',
                [RIGHT]: 'right speaker'
            }
        },
        [LYRIC_EXPAND_BUTTON_KEY]: 'expand/collapse lyric',
        get lyricExpand() {
            return {
                [false]: 'expand lyrics',
                [true]: 'collapse lyrics'
            }
        },
        [LYRIC_SCROLL_BUTTON_KEY]: 'auto scroll lyrics',
        get overview() {
            return {
                [SHOWN]: 'song overview shown',
                [HIDDEN]: 'song overview hidden',
                [DISABLED]: 'song overviews disabled'
            }
        },
        [POPUP_CLOSE_BUTTON_KEY]: 'close popup',
        [POPUP_NEXT_BUTTON_KEY]: 'next annotation',
        [POPUP_PREVIOUS_BUTTON_KEY]: 'previous annotation',
        [SCORES_BUTTON_KEY]: 'score',
        get tips() {
            return {
                [SHOWN]: 'tip shown',
                [HIDDEN]: 'tip hidden',
                [DISABLED]: 'tips disabled'
            }
        }
    }

export const getShowTooltip = buttonName => {
    switch (buttonName) {
        case DOTS_SLIDE_SELECT_BUTTON_KEY:
        case WORMHOLE_BUTTON_KEY:
            return false
    }
    return true
}

export const getShowButtonIcon = buttonName => {
    return buttonName !== DOTS_SLIDE_SELECT_BUTTON_KEY
}

export const getTooltipPlacement = buttonName => {
    switch (buttonName) {
        case ABOUT_BUTTON_KEY:
        case AUDIO_PREVIOUS_BUTTON_KEY:
        case AUDIO_PLAY_BUTTON_KEY:
        case AUDIO_NEXT_BUTTON_KEY:
        case AUDIO_OPTIONS_BUTTON_KEY:
        case NAV_BOOK_BUTTON_KEY:
        case NAV_SONG_BUTTON_KEY:
            return BOTTOM
        case LYRIC_EAR_BUTTON_KEY:
        case LYRIC_SCROLL_BUTTON_KEY:
        case AUDIO_REWIND_BUTTON_KEY:
        case AUDIO_FAST_FORWARD_BUTTON_KEY:
            return LEFT
        default:
            return TOP
    }
}

export const getTooltipText = ({ buttonName, buttonIdentifier }) => {
    if (buttonName === NAV_SONG_BUTTON_KEY) {
        return getSongTitle({
            songIndex: buttonIdentifier,
            showIndex: false
        })
    }

    if (buttonName === NAV_BOOK_BUTTON_KEY) {
        return `Book ${buttonIdentifier === 0 ? 'I' : 'II'}`
    }

    if (!isUndefined(buttonIdentifier)) {
        return TOOLTIP_TEXT_MAP[buttonName][buttonIdentifier]
    }
    return TOOLTIP_TEXT_MAP[buttonName]
}
