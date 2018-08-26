import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Teasing = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Teasing'
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
                    'Teasing'
                )}
            </text>
        </Svg>
    )
}

Teasing.propTypes = propTypes;

export default Teasing
