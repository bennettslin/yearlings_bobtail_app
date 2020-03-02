import {
    ABOUT_BUTTON_KEY,
    AUDIO_NEXT_BUTTON_KEY,
    AUDIO_OPTIONS_BUTTON_KEY,
    AUDIO_PLAY_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY,
    AUDIO_FAST_FORWARD_BUTTON_KEY,
    AUDIO_REWIND_BUTTON_KEY,
    CAROUSEL_NAV_BUTTON_KEY,
    DOTS_SLIDE_BUTTON_KEY,
    LYRIC_EAR_BUTTON_KEY,
    LYRIC_EXPAND_BUTTON_KEY,
    LYRIC_SCROLL_BUTTON_KEY,
    NAV_BOOK_BUTTON_KEY,
    NAV_SONG_BUTTON_KEY,
    OVERVIEW_BUTTON_KEY,
    SCORES_BUTTON_KEY,
    TIPS_BUTTON_KEY
} from '../../../constants/buttons'

import {
    LEFT,
    RIGHT
} from '../../../constants/lyrics'

const
    TOP = 'top',
    BOTTOM = 'bottom'

export const getTooltipPlacement = ({
    buttonName
}) => {
    switch (buttonName) {
        case AUDIO_PREVIOUS_BUTTON_KEY:
        case AUDIO_PLAY_BUTTON_KEY:
        case AUDIO_NEXT_BUTTON_KEY:
        case AUDIO_OPTIONS_BUTTON_KEY:
        case NAV_BOOK_BUTTON_KEY:
        case NAV_SONG_BUTTON_KEY:
            return BOTTOM
        case LYRIC_EAR_BUTTON_KEY:
        case LYRIC_SCROLL_BUTTON_KEY:
            return LEFT
        case ABOUT_BUTTON_KEY:
        case AUDIO_REWIND_BUTTON_KEY:
        case AUDIO_FAST_FORWARD_BUTTON_KEY:
        case CAROUSEL_NAV_BUTTON_KEY:
        case DOTS_SLIDE_BUTTON_KEY:
        case LYRIC_EXPAND_BUTTON_KEY:
        case OVERVIEW_BUTTON_KEY:
        case SCORES_BUTTON_KEY:
        case TIPS_BUTTON_KEY:
            return RIGHT
        default:
            return TOP
    }
}
