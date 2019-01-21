import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BuoyFloat = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BuoyFloat',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'BuoyFloat'
                )}
            </text>
        </Svg>
    )
}

BuoyFloat.propTypes = propTypes

export default BuoyFloat
