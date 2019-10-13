import about from './about'
import audioNext from './audioNext'
import audioOptions from './audioOptions'
import audioPlay from './audioPlay'
import audioPrevious from './audioPrevious'
import audioFastForward from './audioFastForward'
import audioRewind from './audioRewind'
import carouselNav from './carouselNav'
import carouselSelect from './carouselSelect'
import dotsSlide from './dotsSlide'
import lyricEar from './lyricEar'
import lyricExpand from './lyricExpand'
import lyricScroll from './lyricScroll'
import navBook from './navBook'
import navSong from './navSong'
import overview from './overview'
import popupClose from './popupClose'
import popupPrevious from './popupPrevious'
import popupNext from './popupNext'
import wormhole from './wormhole'
import scores from './scores'
import tips from './tips'

import {
    ABOUT_BUTTON_KEY,
    AUDIO_NEXT_BUTTON_KEY,
    AUDIO_OPTIONS_BUTTON_KEY,
    AUDIO_PLAY_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY,
    AUDIO_FAST_FORWARD_BUTTON_KEY,
    AUDIO_REWIND_BUTTON_KEY,
    CAROUSEL_NAV_BUTTON_KEY,
    CAROUSEL_SELECT_BUTTON_KEY,
    DOTS_SLIDE_BUTTON_KEY,
    LYRIC_EAR_BUTTON_KEY,
    LYRIC_EXPAND_BUTTON_KEY,
    LYRIC_SCROLL_BUTTON_KEY,
    NAV_BOOK_BUTTON_KEY,
    NAV_SONG_BUTTON_KEY,
    OVERVIEW_BUTTON_KEY,
    POPUP_CLOSE_BUTTON_KEY,
    POPUP_NEXT_BUTTON_KEY,
    POPUP_PREVIOUS_BUTTON_KEY,
    WORMHOLE_BUTTON_KEY,
    SCORES_BUTTON_KEY,
    TIPS_BUTTON_KEY
} from 'constants/buttons'

const BUTTON_ICONS_MAP = {
    [ABOUT_BUTTON_KEY]: about,
    [AUDIO_NEXT_BUTTON_KEY]: audioNext,
    [AUDIO_OPTIONS_BUTTON_KEY]: audioOptions,
    [AUDIO_PLAY_BUTTON_KEY]: audioPlay,
    [AUDIO_PREVIOUS_BUTTON_KEY]: audioPrevious,
    [AUDIO_FAST_FORWARD_BUTTON_KEY]: audioFastForward,
    [AUDIO_REWIND_BUTTON_KEY]: audioRewind,
    [CAROUSEL_NAV_BUTTON_KEY]: carouselNav,
    [CAROUSEL_SELECT_BUTTON_KEY]: carouselSelect,
    [DOTS_SLIDE_BUTTON_KEY]: dotsSlide,
    [LYRIC_EAR_BUTTON_KEY]: lyricEar,
    [LYRIC_EXPAND_BUTTON_KEY]: lyricExpand,
    [LYRIC_SCROLL_BUTTON_KEY]: lyricScroll,
    [NAV_BOOK_BUTTON_KEY]: navBook,
    [NAV_SONG_BUTTON_KEY]: navSong,
    [OVERVIEW_BUTTON_KEY]: overview,
    [POPUP_CLOSE_BUTTON_KEY]: popupClose,
    [POPUP_NEXT_BUTTON_KEY]: popupNext,
    [POPUP_PREVIOUS_BUTTON_KEY]: popupPrevious,
    [WORMHOLE_BUTTON_KEY]: wormhole,
    [SCORES_BUTTON_KEY]: scores,
    [TIPS_BUTTON_KEY]: tips
}

export default BUTTON_ICONS_MAP
