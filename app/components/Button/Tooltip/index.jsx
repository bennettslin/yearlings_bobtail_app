import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import ReactTooltip from 'react-tooltip'

import { getTooltipPlacement } from './helper'

const Tooltip = ({ buttonName }) => (
    <ReactTooltip
        {...{
            className: cx(
                'ReactTooltip',
                'dropShadow'
            ),
            id: buttonName,
            effect: 'solid',
            delayShow: 750,
            type: 'light',
            place: getTooltipPlacement({ buttonName })
        }}
    />
)

Tooltip.propTypes = {
    buttonName: PropTypes.string.isRequired
}

export default Tooltip
