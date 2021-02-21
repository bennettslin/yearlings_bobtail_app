// Wrapper for user agent.
import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../components/DidMountHoc'
import { DEVICE_WIDTH_CONFIGS } from '../../constants/responsive/deviceWidth'
import {
    mapIsDesktopWidth,
    mapIsTabletWidth,
    mapIsPhoneWidth,
} from '../../redux/device/selector'
import { mapDeviceWidthIndex } from '../../redux/viewport/selector'

import { IS_USER_AGENT_DESKTOP } from '../../constants/device'

const DeviceWrapper = ({ didMount, children }) => {
    const
        deviceWidthIndex = useSelector(mapDeviceWidthIndex),
        isDesktopWidth = useSelector(mapIsDesktopWidth),
        isTabletWidth = useSelector(mapIsTabletWidth),
        isPhoneWidth = useSelector(mapIsPhoneWidth),

        deviceWidthKey =
            DEVICE_WIDTH_CONFIGS[deviceWidthIndex] &&
            DEVICE_WIDTH_CONFIGS[deviceWidthIndex].deviceWidthKey

    useEffect(() => {
        logState('deviceWidthKey', deviceWidthKey)
    }, [deviceWidthKey])

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
                        isDesktopWidth || isTabletWidth ?
                            'DW__tabletOrDesktopWidth' :
                            'DW__phoneOrMiniWidth',
                        !isDesktopWidth && !isPhoneWidth &&
                            'DW__miniOrTabletWidth',
                        'abF'
                    ),
                },
            }}
        >
            {children}
        </div>
    )
}

DeviceWrapper.propTypes = {
    didMount: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
}

export default memo(getDidMountHoc(DeviceWrapper))
