// Wrapper for device class names.
import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getIsTabletWidth } from '../../helpers/responsive'
import { DEVICE_WIDTH_CONFIGS } from '../../constants/responsive/deviceWidth'
import { IS_USER_AGENT_DESKTOP } from '../../constants/device'
import {
    mapIsPhoneWidth,
    mapIsDesktopWidth
} from '../../redux/device/selector'
import {
    mapDeviceWidthIndex,
    mapCanCarouselMount,
    mapCanSliderMount
} from '../../redux/viewport/selector'

const DeviceWrapper = ({ children }) => {
    const
        deviceWidthIndex = useSelector(mapDeviceWidthIndex),
        isPhoneWidth = useSelector(mapIsPhoneWidth),
        isDesktopWidth = useSelector(mapIsDesktopWidth),
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
