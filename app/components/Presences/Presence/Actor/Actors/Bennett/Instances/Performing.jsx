import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Performing = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Performing'
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
                    'Performing'
                )}
            </text>
        </Svg>
    )
}

Performing.propTypes = propTypes;

export default Performing
