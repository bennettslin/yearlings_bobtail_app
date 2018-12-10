import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Indignant = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Indignant'
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
                    'Indignant'
                )}
            </text>
        </Svg>
    )
}

Indignant.propTypes = propTypes

export default Indignant
