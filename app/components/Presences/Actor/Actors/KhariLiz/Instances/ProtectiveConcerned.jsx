import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const ProtectiveConcerned = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'ProtectiveConcerned'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'ProtectiveConcerned'
                )}
            </text>
        </Svg>
    )
}

ProtectiveConcerned.propTypes = propTypes

export default ProtectiveConcerned
