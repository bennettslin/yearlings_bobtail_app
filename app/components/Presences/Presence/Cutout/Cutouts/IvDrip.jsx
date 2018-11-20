import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const IvDrip = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'IvDrip',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'IvDrip'
                )}
            </text>
        </Svg>
    )
}

IvDrip.propTypes = propTypes

export default IvDrip
