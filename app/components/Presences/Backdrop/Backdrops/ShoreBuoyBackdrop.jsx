import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ShoreBuoyBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ShoreBuoyBackdrop',
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
                    'ShoreBuoyBackdrop'
                )}
            </text>
        </Svg>
    )
}

ShoreBuoyBackdrop.propTypes = propTypes;

export default ShoreBuoyBackdrop
