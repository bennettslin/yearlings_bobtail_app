import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PorchDoor = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PorchDoor',
                className
            )}
        >
            <rect
                className={cx(
                    'Door__temporaryRect'
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
                    'PorchDoor'
                )}
            </text>
        </Svg>
    )
}

PorchDoor.propTypes = propTypes;

export default PorchDoor
