import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const AtticCouchArmrestLeft = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'AtticCouchArmrestLeft',
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
                    'AtticCouchArmrestLeft'
                )}
            </text>
        </Svg>
    )
}

AtticCouchArmrestLeft.propTypes = propTypes

export default AtticCouchArmrestLeft
