import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Waiting = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Waiting'
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
                    'Waiting'
                )}
            </text>
        </Svg>
    )
}

Waiting.propTypes = propTypes;

export default Waiting
