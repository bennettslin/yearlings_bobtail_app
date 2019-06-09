import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BennettLeftArmrest = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettLeftArmrest',
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
                    'BennettLeftArmrest'
                )}
            </text>
        </Svg>
    )
}

BennettLeftArmrest.propTypes = propTypes

export default BennettLeftArmrest
