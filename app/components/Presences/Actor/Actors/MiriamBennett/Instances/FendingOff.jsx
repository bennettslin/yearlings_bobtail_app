import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const FendingOff = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'FendingOff'
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
                    'FendingOff'
                )}
            </text>
        </Svg>
    )
}

FendingOff.propTypes = propTypes;

export default FendingOff
