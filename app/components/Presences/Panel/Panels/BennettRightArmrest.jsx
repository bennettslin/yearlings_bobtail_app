import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BennettRightArmrest = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettRightArmrest',
                className
            )}
        >
            <rect
                className={cx(
                    'Panel__temporaryRect'
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
                    'BennettRightArmrest'
                )}
            </text>
        </Svg>
    )
}

BennettRightArmrest.propTypes = propTypes

export default BennettRightArmrest
