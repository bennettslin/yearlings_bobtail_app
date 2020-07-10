// Wrapper for device class names.
import React, { useEffect, useState } from 'react'
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
    mapCanCarouselShow,
    mapCanSliderMount
} from '../../redux/viewport/selector'

const DeviceWrapper = ({ children }) => {
    const
        deviceWidthIndex = useSelector(mapDeviceWidthIndex),
        isPhoneWidth = useSelector(mapIsPhoneWidth),
        isDesktopWidth = useSelector(mapIsDesktopWidth),
        canCarouselShow = useSelector(mapCanCarouselShow),
        canSliderMount = useSelector(mapCanSliderMount),

        deviceWidthKey =
            DEVICE_WIDTH_CONFIGS[deviceWidthIndex] &&
            DEVICE_WIDTH_CONFIGS[deviceWidthIndex].deviceWidthKey,

        isTabletWidth = getIsTabletWidth(deviceWidthIndex),
        [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setDidMount(true)
    }, [])

    return (
        <div
            {...{
                className: cx(
                    'DeviceWrapper',

                    didMount && [
                        `DW__${deviceWidthKey}Width`,
                        IS_USER_AGENT_DESKTOP && 'DW__userAgentDesktop',
                        isDesktopWidth ?
                            'DW__desktopWidth' :
                            'DW__mobileWidth',
                        !isDesktopWidth && {
                            'DW__miniOrTabletWidth': !isPhoneWidth,
                            'DW__phoneOrMiniWidth': !isTabletWidth
                        },
                        // TODO: Make this a selector. See CSS classes.
                        canCarouselShow ?
                            'DW__canCarouselShow' :
                            'DW__cannotCarouselShow',
                        canSliderMount &&
                            'DW__canSliderMount'
                    ],
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
