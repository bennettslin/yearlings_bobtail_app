import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Afterglow = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Afterglow'
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
                    'Afterglow'
                )}
            </text>
        </Svg>
    )
}

Afterglow.propTypes = propTypes;

export default Afterglow
