import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GuitarCase = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GuitarCase',
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
                    'GuitarCase'
                )}
            </text>
        </Svg>
    )
}

GuitarCase.propTypes = propTypes;

export default GuitarCase
