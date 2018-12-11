import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ThrownFruit = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'ThrownFruit',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'ThrownFruit'
                )}
            </text>
        </Svg>
    )
}

ThrownFruit.propTypes = propTypes

export default ThrownFruit
