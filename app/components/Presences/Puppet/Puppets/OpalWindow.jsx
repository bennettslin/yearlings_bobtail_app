import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OpalWindow = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'OpalWindow',
                className
            )}
        >
            <rect
                className={cx(
                    'Puppet__temporaryRect'
                )}
                {...other}
            />
            <text
                className={cx(
                    'Presence__temporaryText'
                )}
                {...other}
            >
                {cx(
                    'OpalWindow'
                )}
            </text>
        </Svg>
    )
}

OpalWindow.propTypes = propTypes;

export default OpalWindow
