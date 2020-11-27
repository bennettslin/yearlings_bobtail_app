// Wrapper for user agent.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../components/DidMountHoc'
import { getIsTabletWidth } from '../../helpers/responsive'
import { DEVICE_WIDTH_CONFIGS } from '../../constants/responsive/deviceWidth'
import {
    mapIsPhoneWidth,
    mapIsDesktopWidth
} from '../../redux/device/selector'
import { mapDeviceWidthIndex } from '../../redux/viewport/selector'

import { IS_USER_AGENT_DESKTOP } from '../../constants/device'

const DeviceWrapper = ({ didMount, children }) => {
    const
        deviceWidthIndex = useSelector(mapDeviceWidthIndex),
        isPhoneWidth = useSelector(mapIsPhoneWidth),
        isDesktopWidth = useSelector(mapIsDesktopWidth),

        deviceWidthKey =
            DEVICE_WIDTH_CONFIGS[deviceWidthIndex] &&
            DEVICE_WIDTH_CONFIGS[deviceWidthIndex].deviceWidthKey,

        isTabletWidth = getIsTabletWidth(deviceWidthIndex)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'DeviceWrapper',
                        IS_USER_AGENT_DESKTOP && 'DW__userAgentDesktop',
                        `DW__${deviceWidthKey}Width`,
                        isDesktopWidth ?
                            'DW__desktopWidth' :
                            'DW__mobileWidth',
                        !isDesktopWidth && {
                            'DW__miniOrTabletWidth': !isPhoneWidth,
                            'DW__phoneOrMiniWidth': !isTabletWidth
                        },
                        'abF'
                    )
                }
            }}
        >
            {children}
        </div>
    )
}

DeviceWrapper.propTypes = {
    didMount: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired
}

export default memo(getDidMountHoc(DeviceWrapper))
