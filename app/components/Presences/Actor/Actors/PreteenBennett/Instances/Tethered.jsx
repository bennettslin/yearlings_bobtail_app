import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Tethered = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Tethered'
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
                    'Tethered'
                )}
            </text>
        </Svg>
    )
}

Tethered.propTypes = propTypes;

export default Tethered
