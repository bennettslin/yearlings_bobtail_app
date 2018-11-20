import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ArmchairLeft = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'ArmchairLeft',
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
                    'ArmchairLeft'
                )}
            </text>
        </Svg>
    )
}

ArmchairLeft.propTypes = propTypes

export default ArmchairLeft
