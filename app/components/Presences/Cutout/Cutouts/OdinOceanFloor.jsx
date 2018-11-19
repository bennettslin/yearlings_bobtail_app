import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OdinOceanFloor = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'OdinOceanFloor',
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
                    'OdinOceanFloor'
                )}
            </text>
        </Svg>
    )
}

OdinOceanFloor.propTypes = propTypes;

export default OdinOceanFloor
