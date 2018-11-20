import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ResidentialNearRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ResidentialNearRight',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'ResidentialNearRight'
                )}
            </text>
        </Svg>
    )
}

ResidentialNearRight.propTypes = propTypes;

export default ResidentialNearRight
