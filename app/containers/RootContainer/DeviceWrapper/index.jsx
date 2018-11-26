// Wrapper for device class names.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { DEVICE_OBJECTS } from 'constants/responsive'

import { getIsTablet } from 'helpers/responsiveHelper'

class DeviceWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isPhone: PropTypes.bool.isRequired,
        isDesktop: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const
            {
                deviceIndex,
                isPhone,
                isDesktop,
                children
            } = this.props,
            deviceClassName = DEVICE_OBJECTS[deviceIndex].className,
            isMobile = !isDesktop,
            isTablet = getIsTablet(deviceIndex)

        return (
            <div
                {...{
                    className: cx(
                        'DeviceWrapper',
                        `DW__${deviceClassName}`,
                        isDesktop ?
                            'DW__desktop' :
                            'DW__mobile',
                        {
                            'DW__notPhone': !isPhone,
                            'DW__mobileNotPhone': isMobile && !isPhone,
                            'DW__mobileNotTablet': isMobile && !isTablet
                        },
                        'absoluteFullContainer'
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
        isPhone,
        isDesktop
    }
}) => ({
    deviceIndex,
    isPhone,
    isDesktop
})

export default connect(mapStateToProps)(DeviceWrapper)
