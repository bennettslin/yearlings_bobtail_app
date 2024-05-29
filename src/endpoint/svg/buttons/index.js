import about from './main/about'
import annotationToggle from './annotationToggle'
import audioPlay from './audio/audioPlay'
import audioPrevious from './audio/audioPrevious'
import audioNext from './audio/audioNext'
import audioRewind from './audio/audioRewind'
import audioFastForward from './audio/audioFastForward'
import songRepeat from './audio/songRepeat'
import carouselNav from './carousel/carouselNav'
import carouselPrevious from './carousel/carouselPrevious'
import carouselNext from './carousel/carouselNext'
import dotsSlide from './main/dotsSlide'
import lyricEar from './lyric/lyricEar'
import lyricExpand from './lyric/lyricExpand'
import lyricScroll from './lyric/lyricScroll'
import rootHome from './promo/rootHome'
import navBook from './nav/navBook'
import navSong from './nav/navSong'
import overview from './main/overview'
import promoBack from './promo/promoBack'
import promoPage from './promo/promoPage'
import paginationNext from './promo/paginationNext'
import paginationPrevious from './promo/paginationPrevious'
import paginationSlide from './promo/paginationSlide'
import popupClose from './popup/popupClose'
import popupPrevious from './popup/popupPrevious'
import popupNext from './popup/popupNext'
import wormhole from './carousel/wormhole'
import scores from './main/scores'
import tips from './main/tips'

import copyUrl from './socialMedia/copyUrl'

import {
    ABOUT_BUTTON_KEY,
    ANNOTATION_TOGGLE_BUTTON_KEY,
    AUDIO_FAST_FORWARD_BUTTON_KEY,
    AUDIO_NEXT_BUTTON_KEY,
    AUDIO_PLAY_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY,
    AUDIO_REWIND_BUTTON_KEY,
    CAROUSEL_NAV_BUTTON_KEY,
    CAROUSEL_NEXT_BUTTON_KEY,
    CAROUSEL_PREVIOUS_BUTTON_KEY,
    DOTS_SLIDE_BUTTON_KEY,
    LYRIC_EAR_BUTTON_KEY,
    LYRIC_EXPAND_BUTTON_KEY,
    LYRIC_SCROLL_BUTTON_KEY,
    NAV_BOOK_BUTTON_KEY,
    NAV_SONG_BUTTON_KEY,
    OVERVIEW_BUTTON_KEY,
    PAGINATION_NEXT_BUTTON_KEY,
    PAGINATION_PREVIOUS_BUTTON_KEY,
    PAGINATION_SLIDE_BUTTON_KEY,
    POPUP_CLOSE_BUTTON_KEY,
    POPUP_NEXT_BUTTON_KEY,
    POPUP_PREVIOUS_BUTTON_KEY,
    PROMO_BACK_BUTTON_KEY,
    PROMO_PAGE_BUTTON_KEY,
    ROOT_HOME_BUTTON_KEY,
    SCORES_BUTTON_KEY,
    COPY_URL_BUTTON_KEY,
    SONG_REPEAT_BUTTON_KEY,
    TIPS_BUTTON_KEY,
    WORMHOLE_BUTTON_KEY,
} from '../../../constants/buttons'

export default {
    [ABOUT_BUTTON_KEY]: about,
    [ANNOTATION_TOGGLE_BUTTON_KEY]: annotationToggle,
    [AUDIO_FAST_FORWARD_BUTTON_KEY]: audioFastForward,
    [AUDIO_NEXT_BUTTON_KEY]: audioNext,
    [AUDIO_PLAY_BUTTON_KEY]: audioPlay,
    [AUDIO_PREVIOUS_BUTTON_KEY]: audioPrevious,
    [AUDIO_REWIND_BUTTON_KEY]: audioRewind,
    [CAROUSEL_NAV_BUTTON_KEY]: carouselNav,
    [CAROUSEL_NEXT_BUTTON_KEY]: carouselNext,
    [CAROUSEL_PREVIOUS_BUTTON_KEY]: carouselPrevious,
    [DOTS_SLIDE_BUTTON_KEY]: dotsSlide,
    [LYRIC_EAR_BUTTON_KEY]: lyricEar,
    [LYRIC_EXPAND_BUTTON_KEY]: lyricExpand,
    [LYRIC_SCROLL_BUTTON_KEY]: lyricScroll,
    [NAV_BOOK_BUTTON_KEY]: navBook,
    [NAV_SONG_BUTTON_KEY]: navSong,
    [OVERVIEW_BUTTON_KEY]: overview,
    [PAGINATION_NEXT_BUTTON_KEY]: paginationNext,
    [PAGINATION_PREVIOUS_BUTTON_KEY]: paginationPrevious,
    [PAGINATION_SLIDE_BUTTON_KEY]: paginationSlide,
    [POPUP_CLOSE_BUTTON_KEY]: popupClose,
    [POPUP_NEXT_BUTTON_KEY]: popupNext,
    [POPUP_PREVIOUS_BUTTON_KEY]: popupPrevious,
    [PROMO_BACK_BUTTON_KEY]: promoBack,
    [PROMO_PAGE_BUTTON_KEY]: promoPage,
    [ROOT_HOME_BUTTON_KEY]: rootHome,
    [SCORES_BUTTON_KEY]: scores,
    [COPY_URL_BUTTON_KEY]: copyUrl,
    [SONG_REPEAT_BUTTON_KEY]: songRepeat,
    [TIPS_BUTTON_KEY]: tips,
    [WORMHOLE_BUTTON_KEY]: wormhole,
}
