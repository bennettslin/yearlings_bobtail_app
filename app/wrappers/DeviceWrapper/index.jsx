// Wrapper for device class names.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { DEVICE_WIDTH_CONFIGS } from 'constants/responsive/deviceWidth'

import { getIsTabletWidth } from 'helpers/responsive'

class DeviceWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        isUserAgentMobile: PropTypes.bool.isRequired,
        deviceWidthIndex: PropTypes.number.isRequired,
        isPhoneWidth: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired,
        canCarouselMount: PropTypes.bool.isRequired,
        canSliderMount: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const
            {
                isUserAgentMobile,
                deviceWidthIndex,
                isPhoneWidth,
                isDesktopWidth,
                canCarouselMount,
                canSliderMount,
                children
            } = this.props,

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

                        isUserAgentMobile && 'DW__userAgentMobile',

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
}

const mapStateToProps = ({
    appStore: { isUserAgentMobile },
    viewportStore: {
        deviceWidthIndex,
        isPhoneWidth,
        isDesktopWidth
    },
    mountStore: {
        canCarouselMount,
        canSliderMount
    }
}) => ({
    isUserAgentMobile,
    deviceWidthIndex,
    isPhoneWidth,
    isDesktopWidth,
    canCarouselMount,
    canSliderMount
})

export default connect(mapStateToProps)(DeviceWrapper)
