import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Squatting = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Squatting'
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
                    'Squatting'
                )}
            </text>
        </Svg>
    )
}

Squatting.propTypes = propTypes;

export default Squatting
