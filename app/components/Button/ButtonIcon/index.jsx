import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from '../../../modules/InlineSvg'
import { getSvgForButton } from '../../../api/svg'
import { getButtonIconClassNames } from './helper'
import { NAV_SONG_BUTTON_KEY } from '../../../constants/buttons'
import './style'

const ButtonIcon = ({
    buttonName,
    buttonIdentifier

}) => {
    const buttonIconSvg = getSvgForButton({
        buttonName,
        buttonIdentifier
    })

    return Boolean(buttonIconSvg) && (
        <InlineSvg
            {...{
                className: cx(
                    'ButtonIcon'
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

ButtonIcon.propTypes = {
    buttonName: PropTypes.string.isRequired,
    buttonIdentifier: PropTypes.any
}

export default memo(ButtonIcon)
