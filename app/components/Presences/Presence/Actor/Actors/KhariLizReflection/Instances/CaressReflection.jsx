import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CaressReflection = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'CaressReflection'
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
                    'CaressReflection'
                )}
            </text>
        </Svg>
    )
}

CaressReflection.propTypes = propTypes;

export default CaressReflection
