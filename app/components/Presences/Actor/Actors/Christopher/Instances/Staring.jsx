import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Reassuring = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Reassuring'
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
                    'Reassuring'
                )}
            </text>
        </Svg>
    )
}

Reassuring.propTypes = propTypes;

export default Reassuring
