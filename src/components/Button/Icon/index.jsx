import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from '../../../modules/InlineSvg'
import { getSvgForButton } from '../../../endpoint/svg'
import {
    getButtonIconClassNames,
    getShowButtonIcon,
} from './helper'
import { NAV_SONG_BUTTON_KEY } from '../../../constants/buttons'
import './style'

const ButtonIcon = ({
    buttonName,
    buttonOption,
    isPlaceholderCharacter,

}) => {
    const buttonIconSvg = getSvgForButton({
            buttonName,
            buttonOption,
        }),
        doRender =
            !isPlaceholderCharacter &&
            getShowButtonIcon(buttonName) &&
            Boolean(buttonIconSvg)

    return doRender && (
        <InlineSvg
            {...{
                className: cx(
                    'ButtonIcon',
                ),
                svgClassName: cx(
                    `ButtonIcon__${buttonName}`,

                    // Allow epilogue button to be horizontally reversed.
                    buttonName === NAV_SONG_BUTTON_KEY &&
                        `ButtonIcon__${buttonName}__${buttonOption}`,

                    getButtonIconClassNames(buttonName),

                    'abF',
                ),
            }}
        >
            {buttonIconSvg}
        </InlineSvg>
    )
}

ButtonIcon.propTypes = {
    buttonName: PropTypes.string.isRequired,
    buttonOption: PropTypes.any,
    isPlaceholderCharacter: PropTypes.any,
}

export default memo(ButtonIcon)
