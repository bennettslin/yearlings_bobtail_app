import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'
import InlineSvg from 'modules/InlineSvg'

// TODO: Move this to icon/index.js
import about from './icon/about'
import audioNext from './icon/audioNext'
import audioOptions from './icon/audioOptions'
import audioPlay from './icon/audioPlay'
import audioPrevious from './icon/audioPrevious'
import carouselNav from './icon/carouselNav'
import carouselSelect from './icon/carouselSelect'
import dotsSlide from './icon/dotsSlide'
import lyricEar from './icon/lyricEar'
import lyricExpand from './icon/lyricExpand'
import lyricScroll from './icon/lyricScroll'
import navBook from './icon/navBook'
import navSong from './icon/navSong'
import overview from './icon/overview'
import popupClose from './icon/popupClose'
import popupPrevious from './icon/popupPrevious'
import popupNext from './icon/popupNext'
import wormhole from './icon/wormhole'
import scores from './icon/scores'
import tips from './icon/tips'

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
    [ABOUT_BUTTON_KEY]: about,
    [AUDIO_NEXT_BUTTON_KEY]: audioNext,
    [AUDIO_OPTIONS_BUTTON_KEY]: audioOptions,
    [AUDIO_PLAY_BUTTON_KEY]: audioPlay,
    [AUDIO_PREVIOUS_BUTTON_KEY]: audioPrevious,
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

const propTypes = {
    // From parent.
    showAsDisabled: PropTypes.bool,
    buttonName: PropTypes.string.isRequired,
    buttonIdentifier: PropTypes.any
}

// TODO: Get rid of this conditional once they're all new svgs.
const isNewSvg = (buttonName) => {
    return buttonName === AUDIO_PLAY_BUTTON_KEY
}

const ButtonIcon = ({
    showAsDisabled,
    buttonName,
    buttonIdentifier

}) => {
    // TODO: Rename as icon getter function, not component.
    const IconComponent = BUTTON_ICONS_MAP[buttonName]

    return isNewSvg(buttonName) ? (
        <InlineSvg
            {...{
                className: cx(
                    'ButtonIcon',
                    'dropShadow',
                    'abF'
                ),
                svgClassName: cx(
                    `ButtonIcon__${buttonName}`,
                    showAsDisabled && 'ButtonIcon__disabled'
                )
            }}
        >
            {IconComponent({ buttonIdentifier })}
        </InlineSvg>
    ) : (
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
                    {...{
                        className: cx(
                            `ButtonIcon__${buttonName}`,
                            showAsDisabled && 'ButtonIcon__disabled'
                        ),
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
