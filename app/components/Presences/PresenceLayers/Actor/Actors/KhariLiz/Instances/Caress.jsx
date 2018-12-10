import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Caress = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Caress'
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
                    'Caress'
                )}
            </text>
        </Svg>
    )
}

Caress.propTypes = propTypes

export default Caress
