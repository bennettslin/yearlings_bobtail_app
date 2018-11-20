import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const AsleepReaching = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'AsleepReaching'
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
                    'AsleepReaching'
                )}
            </text>
        </Svg>
    )
}

AsleepReaching.propTypes = propTypes;

export default AsleepReaching
