import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Staring = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Staring'
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
                    'Staring'
                )}
            </text>
        </Svg>
    )
}

Staring.propTypes = propTypes;

export default Staring
