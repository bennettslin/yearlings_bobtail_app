import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Mischievous = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Mischievous'
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
                    'Mischievous'
                )}
            </text>
        </Svg>
    )
}

Mischievous.propTypes = propTypes;

export default Mischievous
