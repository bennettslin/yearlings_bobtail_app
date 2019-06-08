import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const AtticLeftArmrest = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'AtticLeftArmrest',
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
                    'AtticLeftArmrest'
                )}
            </text>
        </Svg>
    )
}

AtticLeftArmrest.propTypes = propTypes

export default AtticLeftArmrest
