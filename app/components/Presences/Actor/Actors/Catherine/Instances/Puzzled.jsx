import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Puzzled = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Puzzled'
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
                    'Puzzled'
                )}
            </text>
        </Svg>
    )
}

Puzzled.propTypes = propTypes;

export default Puzzled
