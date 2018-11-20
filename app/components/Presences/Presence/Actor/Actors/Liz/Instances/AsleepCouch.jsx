import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const AsleepCouch = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'AsleepCouch'
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
                    'AsleepCouch'
                )}
            </text>
        </Svg>
    )
}

AsleepCouch.propTypes = propTypes;

export default AsleepCouch
