import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GuitarAmp = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GuitarAmp',
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
                    'GuitarAmp'
                )}
            </text>
        </Svg>
    )
}

GuitarAmp.propTypes = propTypes;

export default GuitarAmp
