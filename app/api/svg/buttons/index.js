import about from './main/about'
import audioOptions from './audio/audioOptions'
import audioPlay from './audio/audioPlay'
import audioPrevious from './audio/audioPrevious'
import audioNext from './audio/audioNext'
import audioRewind from './audio/audioRewind'
import audioFastForward from './audio/audioFastForward'
import carouselNav from './carousel/carouselNav'
import carouselPrevious from './carousel/carouselPrevious'
import carouselNext from './carousel/carouselNext'
import dotsSlide from './main/dotsSlide'
import lyricEar from './lyric/lyricEar'
import lyricExpand from './lyric/lyricExpand'
import lyricScroll from './lyric/lyricScroll'
import navBook from './nav/navBook'
import navSong from './nav/navSong'
import overview from './main/overview'
import popupClose from './popup/popupClose'
import popupPrevious from './popup/popupPrevious'
import popupNext from './popup/popupNext'
import wormhole from './carousel/wormhole'
import scores from './main/scores'
import tips from './main/tips'

import {
    ABOUT_BUTTON_KEY,
    AUDIO_OPTIONS_BUTTON_KEY,
    AUDIO_PLAY_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY,
    AUDIO_NEXT_BUTTON_KEY,
    AUDIO_REWIND_BUTTON_KEY,
    AUDIO_FAST_FORWARD_BUTTON_KEY,
    CAROUSEL_NAV_BUTTON_KEY,
    CAROUSEL_PREVIOUS_BUTTON_KEY,
    CAROUSEL_NEXT_BUTTON_KEY,
    DOTS_SLIDE_BUTTON_KEY,
    LYRIC_EAR_BUTTON_KEY,
    LYRIC_EXPAND_BUTTON_KEY,
    LYRIC_SCROLL_BUTTON_KEY,
    NAV_BOOK_BUTTON_KEY,
    NAV_SONG_BUTTON_KEY,
    OVERVIEW_BUTTON_KEY,
    POPUP_CLOSE_BUTTON_KEY,
    POPUP_PREVIOUS_BUTTON_KEY,
    POPUP_NEXT_BUTTON_KEY,
    WORMHOLE_BUTTON_KEY,
    SCORES_BUTTON_KEY,
    TIPS_BUTTON_KEY
} from '../../../constants/buttons'

const BUTTON_ICONS_MAP = {
    [ABOUT_BUTTON_KEY]: about,
    [AUDIO_OPTIONS_BUTTON_KEY]: audioOptions,
    [AUDIO_PLAY_BUTTON_KEY]: audioPlay,
    [AUDIO_PREVIOUS_BUTTON_KEY]: audioPrevious,
    [AUDIO_NEXT_BUTTON_KEY]: audioNext,
    [AUDIO_REWIND_BUTTON_KEY]: audioRewind,
    [AUDIO_FAST_FORWARD_BUTTON_KEY]: audioFastForward,
    [CAROUSEL_NAV_BUTTON_KEY]: carouselNav,
    [CAROUSEL_PREVIOUS_BUTTON_KEY]: carouselPrevious,
    [CAROUSEL_NEXT_BUTTON_KEY]: carouselNext,
    [DOTS_SLIDE_BUTTON_KEY]: dotsSlide,
    [LYRIC_EAR_BUTTON_KEY]: lyricEar,
    [LYRIC_EXPAND_BUTTON_KEY]: lyricExpand,
    [LYRIC_SCROLL_BUTTON_KEY]: lyricScroll,
    [NAV_BOOK_BUTTON_KEY]: navBook,
    [NAV_SONG_BUTTON_KEY]: navSong,
    [OVERVIEW_BUTTON_KEY]: overview,
    [POPUP_CLOSE_BUTTON_KEY]: popupClose,
    [POPUP_PREVIOUS_BUTTON_KEY]: popupPrevious,
    [POPUP_NEXT_BUTTON_KEY]: popupNext,
    [WORMHOLE_BUTTON_KEY]: wormhole,
    [SCORES_BUTTON_KEY]: scores,
    [TIPS_BUTTON_KEY]: tips
}

export const getSvgForButton = ({
    buttonName,
    buttonIdentifier
}) => (
    BUTTON_ICONS_MAP[buttonName]({ buttonIdentifier })
)
