// Wrapper for device class names.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { DEVICE_WIDTH_CONFIGS } from 'constants/responsive'

import { getIsTabletWidth } from 'helpers/responsive'

class DeviceWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        deviceWidthIndex: PropTypes.number.isRequired,
        isPhoneWidth: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired,
        isHigherProcessor: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const
            {
                deviceWidthIndex,
                isPhoneWidth,
                isDesktopWidth,
                isHigherProcessor,
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
                        `DW__${deviceWidthKey}`,
                        isDesktopWidth ?
                            'DW__desktopWidth' :
                            'DW__mobileWidth',
                        !isPhoneWidth &&
                            'DW__notPhoneWidth',
                        !isDesktopWidth && {
                            'DW__miniOrTabletWidth': !isPhoneWidth,
                            'DW__phoneOrMiniWidth': !isTabletWidth
                        },
                        isHigherProcessor &&
                            'DW__higherProcessor',
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
    viewportStore: {
        deviceWidthIndex,
        isPhoneWidth,
        isDesktopWidth
    },
    mobileStore: { isHigherProcessor }
}) => ({
    deviceWidthIndex,
    isPhoneWidth,
    isDesktopWidth,
    isHigherProcessor
})

export default connect(mapStateToProps)(DeviceWrapper)
