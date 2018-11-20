import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Exasperated = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Exasperated'
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
                    'Exasperated'
                )}
            </text>
        </Svg>
    )
}

Exasperated.propTypes = propTypes

export default Exasperated
