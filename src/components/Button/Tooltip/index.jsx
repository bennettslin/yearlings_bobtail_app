import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import { mapIsAccessOn } from '../../../redux/access/selector'
import {
    mapIsDesktopWidth,
    mapIsPhoneOrMiniWidth,
} from '../../../redux/device/selector'
import { getTooltipPlacement } from './helper'
import { IS_USER_AGENT_DESKTOP } from '../../../constants/device'
import './style'
import { getTooltipText } from '../helper'

const Tooltip = ({
    buttonName,
    buttonIdentifier,
    buttonOption,

}) => {
    const
        isAccessOn = useSelector(mapIsAccessOn),
        isDesktopWidth = useSelector(mapIsDesktopWidth),
        isPhoneOrMiniWidth = useSelector(mapIsPhoneOrMiniWidth),
        tooltipId = `${buttonName}${buttonIdentifier || ''}`

    /**
     * If it's a narrow viewport or a mobile device, always allow the tooltip
     * to show. Otherwise, allow it to show if access is on.
     */
    return (
        !IS_USER_AGENT_DESKTOP ||
        isPhoneOrMiniWidth ||
        isAccessOn
    ) && (
        <ReactTooltip
            {...{
                className: cx(
                    'ReactTooltip',
                    'dropShadow',
                ),
                id: tooltipId,
                effect: 'solid',
                delayShow: 750,
                delayHide: 250,
                type: 'light',
                place: getTooltipPlacement({
                    buttonName,
                    isDesktopWidth,
                }),
            }}
        >
            {getTooltipText({
                buttonName,
                buttonOption,
            })}
        </ReactTooltip>
    )
}

Tooltip.propTypes = {
    buttonName: PropTypes.string.isRequired,
    buttonIdentifier: PropTypes.any,
    buttonOption: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
}

export default memo(Tooltip)
