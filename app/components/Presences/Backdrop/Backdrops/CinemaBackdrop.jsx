import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CinemaBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CinemaBackdrop',
                className
            )}
        >
            <rect
                className={cx(
                    'Backdrop__temporaryRect'
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
                    'CinemaBackdrop'
                )}
            </text>
        </Svg>
    )
}

CinemaBackdrop.propTypes = propTypes;

export default CinemaBackdrop
