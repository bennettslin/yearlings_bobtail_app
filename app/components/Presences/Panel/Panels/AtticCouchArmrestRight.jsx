import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const AtticCouchArmrestRight = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'AtticCouchArmrestRight',
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
                    'AtticCouchArmrestRight'
                )}
            </text>
        </Svg>
    )
}

AtticCouchArmrestRight.propTypes = propTypes

export default AtticCouchArmrestRight
