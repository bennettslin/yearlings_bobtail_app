import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Horsing = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Horsing'
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
                    'Horsing'
                )}
            </text>
        </Svg>
    )
}

Horsing.propTypes = propTypes;

export default Horsing
