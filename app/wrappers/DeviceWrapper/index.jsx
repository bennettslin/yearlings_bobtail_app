// Wrapper for device class names.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { DEVICE_OBJECTS } from 'constants/responsive'

import { getIsTabletWidth } from 'helpers/responsive'

class DeviceWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isPhoneWidth: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const
            {
                deviceIndex,
                isPhoneWidth,
                isDesktopWidth,
                children
            } = this.props,
            deviceClassName =
                DEVICE_OBJECTS[deviceIndex] &&
                DEVICE_OBJECTS[deviceIndex].className,
            isTabletWidth = getIsTabletWidth(deviceIndex)

        return (
            <div
                {...{
                    className: cx(
                        'DeviceWrapper',
                        `DW__${deviceClassName}`,
                        isDesktopWidth ?
                            'DW__desktopWidth' :
                            'DW__mobileWidth',
                        !isPhoneWidth &&
                            'DW__notPhoneWidth',
                        !isDesktopWidth && {
                            'DW__miniOrTabletWidth': !isPhoneWidth,
                            'DW__phoneOrMiniWidth': !isTabletWidth
                        },
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
    deviceStore: {
        deviceIndex,
        isPhoneWidth,
        isDesktopWidth
    }
}) => ({
    deviceIndex,
    isPhoneWidth,
    isDesktopWidth
})

export default connect(mapStateToProps)(DeviceWrapper)
