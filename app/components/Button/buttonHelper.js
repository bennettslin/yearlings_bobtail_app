import AudioNextIcon from './Icons/AudioNextIcon'
import AudioOptionsIcon from './Icons/AudioOptionsIcon'
import AudioPlayIcon from './Icons/AudioPlayIcon'
import AudioPreviousIcon from './Icons/AudioPreviousIcon'
import CarouselNavIcon from './Icons/CarouselNavIcon'
import CarouselSelectIcon from './Icons/CarouselSelectIcon'
import DotsSlideIcon from './Icons/DotsSlideIcon'
import LyricEarIcon from './Icons/LyricEarIcon'
import LyricExpandIcon from './Icons/LyricExpandIcon'
import LyricScrollIcon from './Icons/LyricScrollIcon'
import NavBookIcon from './Icons/NavBookIcon'
import NavSongIcon from './Icons/NavSongIcon'
import OverviewIcon from './Icons/OverviewIcon'
import PopupCloseIcon from './Icons/PopupCloseIcon'
import PopupPreviousIcon from './Icons/PopupPreviousIcon'
import PopupNextIcon from './Icons/PopupNextIcon'
import WormholeIcon from './Icons/WormholeIcon'
import ScoresIcon from './Icons/ScoresIcon'
import TitleIcon from './Icons/TitleIcon'
import TipsIcon from './Icons/TipsIcon'

import {
    AUDIO_NEXT_BUTTON_KEY,
    AUDIO_OPTIONS_BUTTON_KEY,
    AUDIO_PLAY_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY,
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
    TIPS_BUTTON_KEY,
    TITLE_BUTTON_KEY
} from '../../constants/buttons'

const BUTTONS_MAP = {
        [AUDIO_NEXT_BUTTON_KEY]: AudioNextIcon,
        [AUDIO_OPTIONS_BUTTON_KEY]: AudioOptionsIcon,
        [AUDIO_PLAY_BUTTON_KEY]: AudioPlayIcon,
        [AUDIO_PREVIOUS_BUTTON_KEY]: AudioPreviousIcon,
        [CAROUSEL_NAV_BUTTON_KEY]: CarouselNavIcon,
        [CAROUSEL_SELECT_BUTTON_KEY]: CarouselSelectIcon,
        [DOTS_SLIDE_BUTTON_KEY]: DotsSlideIcon,
        [LYRIC_EAR_BUTTON_KEY]: LyricEarIcon,
        [LYRIC_EXPAND_BUTTON_KEY]: LyricExpandIcon,
        [LYRIC_SCROLL_BUTTON_KEY]: LyricScrollIcon,
        [NAV_BOOK_BUTTON_KEY]: NavBookIcon,
        [NAV_SONG_BUTTON_KEY]: NavSongIcon,
        [OVERVIEW_BUTTON_KEY]: OverviewIcon,
        [POPUP_CLOSE_BUTTON_KEY]: PopupCloseIcon,
        [POPUP_NEXT_BUTTON_KEY]: PopupNextIcon,
        [POPUP_PREVIOUS_BUTTON_KEY]: PopupPreviousIcon,
        [WORMHOLE_BUTTON_KEY]: WormholeIcon,
        [SCORES_BUTTON_KEY]: ScoresIcon,
        [TIPS_BUTTON_KEY]: TipsIcon,
        [TITLE_BUTTON_KEY]: TitleIcon
    },
    DEFAULT_COMPONENT = () => (null)

export const getButtonIcon = (iconName) => {
    return BUTTONS_MAP[iconName] || DEFAULT_COMPONENT
}
