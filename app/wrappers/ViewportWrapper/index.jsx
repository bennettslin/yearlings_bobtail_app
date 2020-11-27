// Wrapper for device class names.
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
import {
    mapDeviceWidthIndex,
    mapCanCarouselNavMount,
    mapCanSliderMount
} from '../../redux/viewport/selector'

const ViewportWrapper = ({ didMount, children }) => {
    const
        deviceWidthIndex = useSelector(mapDeviceWidthIndex),
        isPhoneWidth = useSelector(mapIsPhoneWidth),
        isDesktopWidth = useSelector(mapIsDesktopWidth),
        canCarouselNavMount = useSelector(mapCanCarouselNavMount),
        canSliderMount = useSelector(mapCanSliderMount),

        deviceWidthKey =
            DEVICE_WIDTH_CONFIGS[deviceWidthIndex] &&
            DEVICE_WIDTH_CONFIGS[deviceWidthIndex].deviceWidthKey,

        isTabletWidth = getIsTabletWidth(deviceWidthIndex)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'ViewportWrapper',
                        `VW__${deviceWidthKey}Width`,
                        isDesktopWidth ?
                            'VW__desktopWidth' :
                            'VW__mobileWidth',
                        !isDesktopWidth && {
                            'VW__miniOrTabletWidth': !isPhoneWidth,
                            'VW__phoneOrMiniWidth': !isTabletWidth
                        },
                        // TODO: Make this a selector. See CSS classes.
                        canCarouselNavMount ?
                            'VW__canCarouselNavMount' :
                            'VW__cannotCarouselShow',
                        canSliderMount &&
                            'VW__canSliderMount',
                        'abF'
                    )
                }
            }}
        >
            {children}
        </div>
    )
}

ViewportWrapper.propTypes = {
    didMount: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired
}

export default memo(getDidMountHoc(ViewportWrapper))
