import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ShaneSpilling = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'ShaneSpilling'
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
                    'ShaneSpilling'
                )}
            </text>
        </Svg>
    )
}

ShaneSpilling.propTypes = propTypes

export default ShaneSpilling
