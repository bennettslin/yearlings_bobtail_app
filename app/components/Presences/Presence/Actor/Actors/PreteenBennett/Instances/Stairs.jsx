import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Stairs = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Stairs'
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
                    'Stairs'
                )}
            </text>
        </Svg>
    )
}

Stairs.propTypes = propTypes;

export default Stairs
