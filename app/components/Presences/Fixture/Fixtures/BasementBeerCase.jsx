import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BasementBeerCase = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BasementBeerCase',
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
                    'BasementBeerCase'
                )}
            </text>
        </Svg>
    )
}

BasementBeerCase.propTypes = propTypes;

export default BasementBeerCase
