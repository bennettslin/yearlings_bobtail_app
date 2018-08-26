import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Fending = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Fending'
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
                    'Fending'
                )}
            </text>
        </Svg>
    )
}

Fending.propTypes = propTypes;

export default Fending
