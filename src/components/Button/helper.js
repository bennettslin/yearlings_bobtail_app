import React from 'react'
import { getTitleForAlbum } from '../../endpoint/album/title'
import { getTitleForSong } from '../../endpoint/album/songs'
import {
    ABOUT_BUTTON_KEY,
    ANNOTATION_TOGGLE_BUTTON_KEY,
    AUDIO_NEXT_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY,
    AUDIO_FAST_FORWARD_BUTTON_KEY,
    AUDIO_REWIND_BUTTON_KEY,
    CAROUSEL_PREVIOUS_BUTTON_KEY,
    CAROUSEL_NEXT_BUTTON_KEY,
    DOTS_SLIDE_BUTTON_KEY,
    DOTS_SLIDE_SELECT_BUTTON_KEY,
    LYRIC_EXPAND_BUTTON_KEY,
    LYRIC_SCROLL_BUTTON_KEY,
    NAV_BOOK_BUTTON_KEY,
    NAV_SONG_BUTTON_KEY,
    PROMO_PAGE_BUTTON_KEY,
    PAGINATION_PREVIOUS_BUTTON_KEY,
    PAGINATION_NEXT_BUTTON_KEY,
    PAGINATION_SLIDE_BUTTON_KEY,
    POPUP_CLOSE_BUTTON_KEY,
    POPUP_PREVIOUS_BUTTON_KEY,
    POPUP_NEXT_BUTTON_KEY,
    SCORES_BUTTON_KEY,
    COPY_URL_BUTTON_KEY,
    SONG_REPEAT_BUTTON_KEY,
    WORMHOLE_BUTTON_KEY,
    PROMO_BACK_BUTTON_KEY,
} from '../../constants/buttons'
import { IS_USER_AGENT_DESKTOP } from '../../constants/device'

import {
    LYRIC_LEFT,
    RIGHT,
} from '../../constants/lyrics'

import {
    SHOWN,
    HIDDEN,
    DISABLED,
    CLOSE_NAV_NEXT,
    SHOW_NAV_NEXT,
    SHOW_CAROUSEL_FROM_NAV,
    SHOW_CAROUSEL_NAV_NEXT,
} from '../../constants/options'

const TOOLTIP_TEXT_MAP = {
    [ABOUT_BUTTON_KEY]: (
        <>
            {'about\u00a0'}
            <i>{getTitleForAlbum()}</i>
        </>
    ),
    get [ANNOTATION_TOGGLE_BUTTON_KEY]() {
        return {
            [false]: 'show in carousel',
            [true]: 'show in popup',
        }
    },
    get [SONG_REPEAT_BUTTON_KEY]() {
        return {
            [false]: 'continued play',
            [true]: 'repeated play',
        }
    },
    get audioPlay() {
        return {
            [false]: 'play',
            [true]: 'pause',
        }
    },
    [AUDIO_PREVIOUS_BUTTON_KEY]: 'previous track',
    [AUDIO_NEXT_BUTTON_KEY]: 'next track',
    [AUDIO_REWIND_BUTTON_KEY]: 'rewind',
    // This needs a non-breaking space, for some reason.
    [AUDIO_FAST_FORWARD_BUTTON_KEY]: 'fast\u00a0forward',
    get carouselNav() {
        return {
            [CLOSE_NAV_NEXT]: 'close album navigation',
            [SHOW_NAV_NEXT]: 'show album navigation',
            [SHOW_CAROUSEL_FROM_NAV]: 'show annotation carousel',
            [SHOW_CAROUSEL_NAV_NEXT]: 'show carousel and navigation',
        }
    },
    [CAROUSEL_PREVIOUS_BUTTON_KEY]: 'previous annotation',
    [CAROUSEL_NEXT_BUTTON_KEY]: 'next annotation',
    [DOTS_SLIDE_BUTTON_KEY]: 'thematic dots',
    get lyricEar() {
        return {
            [LYRIC_LEFT]: 'left speaker',
            [RIGHT]: 'right speaker',
        }
    },
    [LYRIC_EXPAND_BUTTON_KEY]: 'expand/collapse lyric',
    get lyricExpand() {
        return {
            [false]: 'expand lyrics',
            [true]: 'collapse lyrics',
        }
    },
    [LYRIC_SCROLL_BUTTON_KEY]: 'auto scroll lyrics',
    get overview() {
        return {
            [SHOWN]: 'Bennett speaking',
            [HIDDEN]: 'Bennett silent',
            [DISABLED]: 'Bennett muted',
        }
    },
    [PAGINATION_PREVIOUS_BUTTON_KEY]: 'previous pitch page',
    [PAGINATION_NEXT_BUTTON_KEY]: 'next pitch page',
    [POPUP_CLOSE_BUTTON_KEY]: 'close popup',
    [POPUP_PREVIOUS_BUTTON_KEY]: 'previous annotation',
    [POPUP_NEXT_BUTTON_KEY]: 'next annotation',
    [SCORES_BUTTON_KEY]: 'music score',
    get [COPY_URL_BUTTON_KEY]() {
        return {
            [false]: 'copy link to clipboard',
            [true]: 'link copied!',
        }
    },
    get tips() {
        return {
            [SHOWN]: 'tip shown',
            [HIDDEN]: 'tip hidden',
            [DISABLED]: 'tips disabled',
        }
    },
}

export const getIsTooltipEnabled = buttonName => {
    // Don't show tooltips in mobile, to avoid sticky hover.
    if (!IS_USER_AGENT_DESKTOP) {
        return false
    }

    switch (buttonName) {
        case DOTS_SLIDE_SELECT_BUTTON_KEY:
        case NAV_BOOK_BUTTON_KEY:
        case NAV_SONG_BUTTON_KEY:
        case PROMO_PAGE_BUTTON_KEY:
        case PROMO_BACK_BUTTON_KEY:
        case PAGINATION_SLIDE_BUTTON_KEY:
        case WORMHOLE_BUTTON_KEY:
            return false
    }
    return true
}

export const getTooltipText = ({ buttonName, buttonOption }) => {
    if (buttonName === NAV_SONG_BUTTON_KEY) {
        return getTitleForSong(buttonOption)
    }

    if (buttonName === NAV_BOOK_BUTTON_KEY) {
        return `Book ${buttonOption === 0 ? 'I' : 'II'}`
    }

    if (buttonOption !== undefined) {
        return TOOLTIP_TEXT_MAP[buttonName][buttonOption]
    }
    return TOOLTIP_TEXT_MAP[buttonName]
}
