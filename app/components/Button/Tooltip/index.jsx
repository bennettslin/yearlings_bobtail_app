import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'

import ReactTooltip from 'react-tooltip'

import { getTooltipPlacement } from './helper'

import { IS_USER_AGENT_DESKTOP } from '../../../constants/device'

const mapStateToProps = ({
    accessStore: { isAccessOn },
    viewportStore: {
        isDesktopWidth,
        isTabletWidth
    }
}) => ({
    isAccessOn,
    isDesktopWidth,
    isTabletWidth
})

const Tooltip = ({ buttonName }) => {
    const {
            isAccessOn,
            isDesktopWidth,
            isTabletWidth
        } = useSelector(mapStateToProps),

        isPhoneOrMiniWidth = !isDesktopWidth && !isTabletWidth

    /**
     * If it's a narrow viewport or a mobile device, always allow the tooltip
     * to show. Otherwise, allow it to show if access is on.
     */
    return (!IS_USER_AGENT_DESKTOP || isPhoneOrMiniWidth || isAccessOn) && (
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
                place: getTooltipPlacement({
                    buttonName,
                    isDesktopWidth
                })
            }}
        />
    )
}

Tooltip.propTypes = {
    buttonName: PropTypes.string.isRequired
}

export default Tooltip
