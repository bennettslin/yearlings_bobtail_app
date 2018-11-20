import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DispenserRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'DispenserRight',
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
                    'DispenserRight'
                )}
            </text>
        </Svg>
    )
}

DispenserRight.propTypes = propTypes;

export default DispenserRight
