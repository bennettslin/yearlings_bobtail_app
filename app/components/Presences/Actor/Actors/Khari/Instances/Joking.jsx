import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Joking = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Joking'
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
                    'Joking'
                )}
            </text>
        </Svg>
    )
}

Joking.propTypes = propTypes;

export default Joking
