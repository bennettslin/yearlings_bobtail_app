import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Snickering = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Snickering'
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
                    'Snickering'
                )}
            </text>
        </Svg>
    )
}

Snickering.propTypes = propTypes;

export default Snickering
