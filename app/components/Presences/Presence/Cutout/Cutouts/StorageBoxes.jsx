import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const StorageBoxes = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'StorageBoxes',
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
                    'StorageBoxes'
                )}
            </text>
        </Svg>
    )
}

StorageBoxes.propTypes = propTypes;

export default StorageBoxes
