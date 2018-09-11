import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const RoyceHall = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'RoyceHall',
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
                    'RoyceHall'
                )}
            </text>
        </Svg>
    )
}

RoyceHall.propTypes = propTypes;

export default RoyceHall
