import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const AtticRightArmrest = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'AtticRightArmrest',
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
                    'AtticRightArmrest'
                )}
            </text>
        </Svg>
    )
}

AtticRightArmrest.propTypes = propTypes

export default AtticRightArmrest
