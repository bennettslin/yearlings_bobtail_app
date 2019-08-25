import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

import About from './Icons/About'
import AudioNext from './Icons/AudioNext'
import AudioOptions from './Icons/AudioOptions'
import AudioPlay from './Icons/AudioPlay'
import AudioPrevious from './Icons/AudioPrevious'
import CarouselNav from './Icons/CarouselNav'
import CarouselSelect from './Icons/CarouselSelect'
import DotsSlide from './Icons/DotsSlide'
import LyricEar from './Icons/LyricEar'
import LyricExpand from './Icons/LyricExpand'
import LyricScroll from './Icons/LyricScroll'
import NavBook from './Icons/NavBook'
import NavSong from './Icons/NavSong'
import Overview from './Icons/Overview'
import PopupClose from './Icons/PopupClose'
import PopupPrevious from './Icons/PopupPrevious'
import PopupNext from './Icons/PopupNext'
import Wormhole from './Icons/Wormhole'
import Scores from './Icons/Scores'
import Tips from './Icons/Tips'

import {
    ABOUT_BUTTON_KEY,
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
    TIPS_BUTTON_KEY
} from 'constants/buttons'

const BUTTON_ICONS_MAP = {
        [ABOUT_BUTTON_KEY]: About,
        [AUDIO_NEXT_BUTTON_KEY]: AudioNext,
        [AUDIO_OPTIONS_BUTTON_KEY]: AudioOptions,
        [AUDIO_PLAY_BUTTON_KEY]: AudioPlay,
        [AUDIO_PREVIOUS_BUTTON_KEY]: AudioPrevious,
        [CAROUSEL_NAV_BUTTON_KEY]: CarouselNav,
        [CAROUSEL_SELECT_BUTTON_KEY]: CarouselSelect,
        [DOTS_SLIDE_BUTTON_KEY]: DotsSlide,
        [LYRIC_EAR_BUTTON_KEY]: LyricEar,
        [LYRIC_EXPAND_BUTTON_KEY]: LyricExpand,
        [LYRIC_SCROLL_BUTTON_KEY]: LyricScroll,
        [NAV_BOOK_BUTTON_KEY]: NavBook,
        [NAV_SONG_BUTTON_KEY]: NavSong,
        [OVERVIEW_BUTTON_KEY]: Overview,
        [POPUP_CLOSE_BUTTON_KEY]: PopupClose,
        [POPUP_NEXT_BUTTON_KEY]: PopupNext,
        [POPUP_PREVIOUS_BUTTON_KEY]: PopupPrevious,
        [WORMHOLE_BUTTON_KEY]: Wormhole,
        [SCORES_BUTTON_KEY]: Scores,
        [TIPS_BUTTON_KEY]: Tips
    },
    DEFAULT_COMPONENT = () => null

const propTypes = {
    // From parent.
    showAsDisabled: PropTypes.bool,
    buttonName: PropTypes.string.isRequired,
    buttonIdentifier: PropTypes.any
}

const ButtonIcon = ({
    showAsDisabled,
    buttonName,
    buttonIdentifier

}) => {

    const IconComponent = BUTTON_ICONS_MAP[buttonName] || DEFAULT_COMPONENT

    return (
        <div
            className={cx(
                'ButtonIcon',
                'dropShadow',
                'abF',
                'flexCentreContainer'
            )}
        >
            <Svg
                className={cx(
                    'abF'
                )}
            >
                <IconComponent
                    className={cx(
                        `ButtonIcon__${buttonName}`,
                        showAsDisabled && 'ButtonIcon__disabled'
                    )}
                    {...{
                        // Icon component only knows this identifier.
                        buttonIdentifier
                    }}
                />
            </Svg>
        </div>
    )
}

ButtonIcon.propTypes = propTypes

export default memo(ButtonIcon)
