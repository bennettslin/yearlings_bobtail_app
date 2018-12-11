import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Collecting = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Collecting'
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
                    'Collecting'
                )}
            </text>
        </Svg>
    )
}

Collecting.propTypes = propTypes

export default Collecting
