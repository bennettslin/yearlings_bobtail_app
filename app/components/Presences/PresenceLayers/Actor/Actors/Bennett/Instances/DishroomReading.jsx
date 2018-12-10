import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DishroomReading = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'DishroomReading'
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
                    'DishroomReading'
                )}
            </text>
        </Svg>
    )
}

DishroomReading.propTypes = propTypes

export default DishroomReading
