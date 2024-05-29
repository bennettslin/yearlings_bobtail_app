import {
    ABOUT_BUTTON_KEY,
    ANNOTATION_TOGGLE_BUTTON_KEY,
    AUDIO_FAST_FORWARD_BUTTON_KEY,
    AUDIO_NEXT_BUTTON_KEY,
    AUDIO_PLAY_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY,
    AUDIO_REWIND_BUTTON_KEY,
    CAROUSEL_NAV_BUTTON_KEY,
    DOTS_SLIDE_BUTTON_KEY,
    LYRIC_EAR_BUTTON_KEY,
    LYRIC_EXPAND_BUTTON_KEY,
    LYRIC_SCROLL_BUTTON_KEY,
    OVERVIEW_BUTTON_KEY,
    SCORES_BUTTON_KEY,
    COPY_URL_BUTTON_KEY,
    SONG_REPEAT_BUTTON_KEY,
    TIPS_BUTTON_KEY,
} from '../../../constants/buttons'

const TOOLTIP_BOTTOM = 'bottom'
const TOOLTIP_LEFT = 'left'
const TOOLTIP_RIGHT = 'right'

export const getTooltipPlacement = ({
    buttonName,
    isDesktopWidth,

}) => {
    if (isDesktopWidth) {
        switch (buttonName) {
            case LYRIC_EAR_BUTTON_KEY:
                return TOOLTIP_LEFT
            case SCORES_BUTTON_KEY:
            case TIPS_BUTTON_KEY:
                return TOOLTIP_RIGHT
        }
    }

    switch (buttonName) {
        case AUDIO_PREVIOUS_BUTTON_KEY:
        case AUDIO_PLAY_BUTTON_KEY:
        case AUDIO_NEXT_BUTTON_KEY:
        case SONG_REPEAT_BUTTON_KEY:
            return TOOLTIP_BOTTOM
        case COPY_URL_BUTTON_KEY:
        case LYRIC_SCROLL_BUTTON_KEY:
        case SCORES_BUTTON_KEY:
        case TIPS_BUTTON_KEY:
            return TOOLTIP_LEFT
        case ABOUT_BUTTON_KEY:
        case ANNOTATION_TOGGLE_BUTTON_KEY:
        case AUDIO_REWIND_BUTTON_KEY:
        case AUDIO_FAST_FORWARD_BUTTON_KEY:
        case CAROUSEL_NAV_BUTTON_KEY:
        case DOTS_SLIDE_BUTTON_KEY:
        case LYRIC_EAR_BUTTON_KEY:
        case LYRIC_EXPAND_BUTTON_KEY:
        case OVERVIEW_BUTTON_KEY:
            return TOOLTIP_RIGHT
    }
}
