import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettOceanFloor = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'BennettOceanFloor',
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
                    'BennettOceanFloor'
                )}
            </text>
        </Svg>
    )
}

BennettOceanFloor.propTypes = propTypes

export default BennettOceanFloor
