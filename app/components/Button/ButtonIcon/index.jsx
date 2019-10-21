import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'
import InlineSvg from 'modules/InlineSvg'

import BUTTON_ICONS_MAP from '../../../svg/buttons'

import {
    ABOUT_BUTTON_KEY,
    AUDIO_OPTIONS_BUTTON_KEY,
    AUDIO_PLAY_BUTTON_KEY,
    AUDIO_PREVIOUS_BUTTON_KEY,
    AUDIO_NEXT_BUTTON_KEY,
    AUDIO_REWIND_BUTTON_KEY,
    AUDIO_FAST_FORWARD_BUTTON_KEY,
    // CAROUSEL_NAV_BUTTON_KEY,
    CAROUSEL_PREVIOUS_BUTTON_KEY,
    CAROUSEL_NEXT_BUTTON_KEY,
    // DOTS_SLIDE_BUTTON_KEY,
    LYRIC_EAR_BUTTON_KEY,
    LYRIC_EXPAND_BUTTON_KEY,
    // LYRIC_SCROLL_BUTTON_KEY,
    // NAV_BOOK_BUTTON_KEY,
    // NAV_SONG_BUTTON_KEY,
    // OVERVIEW_BUTTON_KEY,
    POPUP_CLOSE_BUTTON_KEY,
    POPUP_PREVIOUS_BUTTON_KEY,
    POPUP_NEXT_BUTTON_KEY,
    // WORMHOLE_BUTTON_KEY,
    SCORES_BUTTON_KEY
    // TIPS_BUTTON_KEY
} from 'constants/buttons'

const propTypes = {
    // From parent.
    showAsDisabled: PropTypes.bool,
    buttonName: PropTypes.string.isRequired,
    buttonIdentifier: PropTypes.any
}

// TODO: Get rid of this conditional once they're all new svgs.
const isNewSvg = (buttonName) => {
    return (
        buttonName === ABOUT_BUTTON_KEY ||
        buttonName === AUDIO_OPTIONS_BUTTON_KEY ||
        buttonName === AUDIO_PLAY_BUTTON_KEY ||
        buttonName === AUDIO_PREVIOUS_BUTTON_KEY ||
        buttonName === AUDIO_NEXT_BUTTON_KEY ||
        buttonName === AUDIO_REWIND_BUTTON_KEY ||
        buttonName === AUDIO_FAST_FORWARD_BUTTON_KEY ||
        buttonName === CAROUSEL_PREVIOUS_BUTTON_KEY ||
        buttonName === CAROUSEL_NEXT_BUTTON_KEY ||
        buttonName === LYRIC_EAR_BUTTON_KEY ||
        buttonName === LYRIC_EXPAND_BUTTON_KEY ||
        buttonName === POPUP_CLOSE_BUTTON_KEY ||
        buttonName === POPUP_PREVIOUS_BUTTON_KEY ||
        buttonName === POPUP_NEXT_BUTTON_KEY ||
        buttonName === SCORES_BUTTON_KEY
    )
}

const ButtonIcon = ({
    showAsDisabled,
    buttonName,
    buttonIdentifier

}) => {
    const IconComponent = BUTTON_ICONS_MAP[buttonName]

    return isNewSvg(buttonName) ? (
        <InlineSvg
            {...{
                className: cx(
                    'ButtonIcon',
                    'dropShadow'
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
