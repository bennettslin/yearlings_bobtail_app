import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ElCerritoRoad = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ElCerritoRoad',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'ElCerritoRoad'
                )}
            </text>
        </Svg>
    )
}

ElCerritoRoad.propTypes = propTypes;

export default ElCerritoRoad
