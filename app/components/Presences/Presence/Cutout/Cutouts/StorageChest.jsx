import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const StorageChest = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'StorageChest',
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
                    'StorageChest'
                )}
            </text>
        </Svg>
    )
}

StorageChest.propTypes = propTypes;

export default StorageChest
