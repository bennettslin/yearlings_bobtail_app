import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Stepladder = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'Stepladder',
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
                    'Stepladder'
                )}
            </text>
        </Svg>
    )
}

Stepladder.propTypes = propTypes

export default Stepladder
