import { getTitleForSong } from '../../api/album/songs'
import {
    ABOUT_BUTTON_KEY,
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
    SOCIAL_COPY_URL_BUTTON_KEY,
    SOCIAL_FACEBOOK_BUTTON_KEY,
    SOCIAL_TWITTER_BUTTON_KEY,
    WORMHOLE_BUTTON_KEY,
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
    [ABOUT_BUTTON_KEY]: 'about this album',
    get songRepeat() {
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
    [DOTS_SLIDE_BUTTON_KEY]: 'annotation categories',
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
            [SHOWN]: 'song overview shown',
            [HIDDEN]: 'song overview hidden',
            [DISABLED]: 'song overviews disabled',
        }
    },
    [PAGINATION_PREVIOUS_BUTTON_KEY]: 'previous pitch page',
    [PAGINATION_NEXT_BUTTON_KEY]: 'next pitch page',
    [POPUP_CLOSE_BUTTON_KEY]: 'close popup',
    [POPUP_PREVIOUS_BUTTON_KEY]: 'previous annotation',
    [POPUP_NEXT_BUTTON_KEY]: 'next annotation',
    [SCORES_BUTTON_KEY]: 'score',
    [SOCIAL_COPY_URL_BUTTON_KEY]: 'copy link to clipboard',
    [SOCIAL_FACEBOOK_BUTTON_KEY]: 'post on Facebook',
    [SOCIAL_TWITTER_BUTTON_KEY]: 'post on Twitter',
    get tips() {
        return {
            [SHOWN]: 'tip shown',
            [HIDDEN]: 'tip hidden',
            [DISABLED]: 'tips disabled',
        }
    },
}

export const getShowTooltip = buttonName => {
    // Don't show tooltips in mobile, to avoid sticky hover.
    if (!IS_USER_AGENT_DESKTOP) {
        return false
    }

    switch (buttonName) {
        case DOTS_SLIDE_SELECT_BUTTON_KEY:
        case NAV_BOOK_BUTTON_KEY:
        case NAV_SONG_BUTTON_KEY:
        case PROMO_PAGE_BUTTON_KEY:
        case PAGINATION_SLIDE_BUTTON_KEY:
        case WORMHOLE_BUTTON_KEY:
            return false
    }
    return true
}

export const getTooltipText = ({ buttonName, buttonIdentifier }) => {
    if (buttonName === NAV_SONG_BUTTON_KEY) {
        return getTitleForSong(buttonIdentifier)
    }

    if (buttonName === NAV_BOOK_BUTTON_KEY) {
        return `Book ${buttonIdentifier === 0 ? 'I' : 'II'}`
    }

    if (buttonIdentifier !== undefined) {
        return TOOLTIP_TEXT_MAP[buttonName][buttonIdentifier]
    }
    return TOOLTIP_TEXT_MAP[buttonName]
}
