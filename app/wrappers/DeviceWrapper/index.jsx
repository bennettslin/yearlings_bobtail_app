// Wrapper for user agent.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../components/DidMountHoc'
import { IS_USER_AGENT_DESKTOP } from '../../constants/device'

const DeviceWrapper = ({ didMount, children }) => {
    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'DeviceWrapper',
                        IS_USER_AGENT_DESKTOP && 'DW__userAgentDesktop',
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
