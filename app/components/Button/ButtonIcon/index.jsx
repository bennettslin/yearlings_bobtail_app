import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import InlineSvg from 'modules/InlineSvg'

import BUTTON_ICONS_MAP from '../../../svg/buttons'

import { getButtonIconClassNames } from './helper'

import { NAV_SONG_BUTTON_KEY } from 'constants/buttons'

const propTypes = {
    // From parent.
    buttonName: PropTypes.string.isRequired,
    buttonIdentifier: PropTypes.any,
    noDropShadowLight: PropTypes.bool
}

const ButtonIcon = ({
    buttonName,
    buttonIdentifier,
    noDropShadowLight

}) => {
    const buttonIconSvg = BUTTON_ICONS_MAP[buttonName]({ buttonIdentifier })

    return Boolean(buttonIconSvg) && (
        <InlineSvg
            {...{
                className: cx(
                    'ButtonIcon',
                    'dropShadow',
                    !noDropShadowLight && 'dropShadow__light'
                ),
                svgClassName: cx(
                    `ButtonIcon__${buttonName}`,

                    // Allow epilogue button to be horizontally reversed.
                    buttonName === NAV_SONG_BUTTON_KEY &&
                        `ButtonIcon__${buttonName}__${buttonIdentifier}`,

                    getButtonIconClassNames({
                        buttonName,
                        buttonIdentifier
                    })
                )
            }}
        >
            {buttonIconSvg}
        </InlineSvg>
    )
}

ButtonIcon.propTypes = propTypes

export default memo(ButtonIcon)
