import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OpalCouch = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'OpalCouch',
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
                    'OpalCouch'
                )}
            </text>
        </Svg>
    )
}

OpalCouch.propTypes = propTypes

export default OpalCouch
