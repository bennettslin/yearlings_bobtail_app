import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const HaircutScissors = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'HaircutScissors',
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
                    'HaircutScissors'
                )}
            </text>
        </Svg>
    )
}

HaircutScissors.propTypes = propTypes

export default HaircutScissors
