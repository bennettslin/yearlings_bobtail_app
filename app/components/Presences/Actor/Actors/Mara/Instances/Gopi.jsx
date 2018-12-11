import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Gopi = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Gopi'
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
                    'Gopi'
                )}
            </text>
        </Svg>
    )
}

Gopi.propTypes = propTypes

export default Gopi
