// Wrapper for device class names.
import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getIsTabletWidth } from '../../helpers/responsive'
import { DEVICE_WIDTH_CONFIGS } from '../../constants/responsive/deviceWidth'
import { IS_USER_AGENT_DESKTOP } from '../../constants/device'
import {
    mapCanCarouselMount,
    mapCanSliderMount
} from '../../redux/mount/selectors'
import {
    DEVICE_WIDTH_INDEX_SELECTOR,
    IS_PHONE_WIDTH_SELECTOR,
    IS_DESKTOP_WIDTH_SELECTOR
} from '../../redux/viewport/selectors'

const DeviceWrapper = ({ children }) => {
    const
        deviceWidthIndex = useSelector(DEVICE_WIDTH_INDEX_SELECTOR),
        isPhoneWidth = useSelector(IS_PHONE_WIDTH_SELECTOR),
        isDesktopWidth = useSelector(IS_DESKTOP_WIDTH_SELECTOR),
        canCarouselMount = useSelector(mapCanCarouselMount),
        canSliderMount = useSelector(mapCanSliderMount),

        deviceWidthKey =
            DEVICE_WIDTH_CONFIGS[deviceWidthIndex] &&
            DEVICE_WIDTH_CONFIGS[deviceWidthIndex].deviceWidthKey,

        isTabletWidth = getIsTabletWidth(deviceWidthIndex)

    return (
        <div
            {...{
                className: cx(
                    'DeviceWrapper',
                    `DW__${deviceWidthKey}Width`,

                    IS_USER_AGENT_DESKTOP && 'DW__userAgentDesktop',

                    isDesktopWidth ?
                        'DW__desktopWidth' :
                        'DW__mobileWidth',
                    !isPhoneWidth &&
                        'DW__notPhoneWidth',
                    !isDesktopWidth && {
                        'DW__miniOrTabletWidth': !isPhoneWidth,
                        'DW__phoneOrMiniWidth': !isTabletWidth
                    },
                    canCarouselMount ?
                        'DW__canCarouselMount' :
                        'DW__cannotCarouselMount',
                    canSliderMount &&
                        'DW__canSliderMount',
                    'abF'
                )
            }}
        >
            {children}
        </div>
    )
}

DeviceWrapper.propTypes = {
    children: PropTypes.any.isRequired
}

export default DeviceWrapper
