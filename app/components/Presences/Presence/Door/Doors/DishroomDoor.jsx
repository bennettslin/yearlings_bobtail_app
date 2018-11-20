import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DishroomDoor = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'DishroomDoor',
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
                    'DishroomDoor'
                )}
            </text>
        </Svg>
    )
}

DishroomDoor.propTypes = propTypes

export default DishroomDoor
