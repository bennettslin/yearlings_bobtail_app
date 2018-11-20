import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Curious = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Curious'
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
                    'Curious'
                )}
            </text>
        </Svg>
    )
}

Curious.propTypes = propTypes;

export default Curious
