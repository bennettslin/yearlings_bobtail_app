import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'

import ReactTooltip from 'react-tooltip'

import { getTooltipPlacement } from './helper'

const mapStateToProps = ({
    accessStore: { isAccessOn },
    appStore: { isUserAgentDesktop },
    viewportStore: {
        isDesktopWidth,
        isTabletWidth
    }
}) => ({
    isAccessOn,
    isUserAgentDesktop,
    isDesktopWidth,
    isTabletWidth
})

const Tooltip = ({ buttonName }) => {
    const {
            isAccessOn,
            isUserAgentDesktop,
            isDesktopWidth,
            isTabletWidth
        } = useSelector(mapStateToProps),

        isPhoneOrMiniWidth = !isDesktopWidth && !isTabletWidth

    /**
     * If it's a narrow viewport or a mobile device, always allow the tooltip
     * to show. Otherwise, allow it to show if access is on.
     */
    return (isPhoneOrMiniWidth || !isUserAgentDesktop || isAccessOn) && (
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
    // Through Redux.
    // isAccessOn: PropTypes.bool.isRequired,
    // isUserAgentDesktop: PropTypes.bool.isRequired,
    // isDesktopWidth: PropTypes.bool.isRequired,
    // isTabletWidth: PropTypes.bool.isRequired,

    buttonName: PropTypes.string.isRequired
}

export default Tooltip
