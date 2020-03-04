import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'

import ReactTooltip from 'react-tooltip'

import { getTooltipPlacement } from './helper'

const mapStateToProps = ({
    accessStore: { isAccessOn },
    appStore: { isUserAgentMobile },
    viewportStore: {
        isDesktopWidth,
        isTabletWidth
    }
}) => ({
    isAccessOn,
    isUserAgentMobile,
    isDesktopWidth,
    isTabletWidth
})

const Tooltip = ({ buttonName }) => {
    const {
        isAccessOn,
        isUserAgentMobile
        // isDesktopWidth,
        // isTabletWidth
    } = useSelector(mapStateToProps)

    return (!isUserAgentMobile || isAccessOn) && (
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
}

Tooltip.propTypes = {
    // Through Redux.
    isAccessOn: PropTypes.bool.isRequired,
    isUserAgentMobile: PropTypes.bool.isRequired,
    isDesktopWidth: PropTypes.bool.isRequired,

    buttonName: PropTypes.string.isRequired
}

export default memo(Tooltip)
