import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const MiriamCouchArmrestLeft = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'MiriamCouchArmrestLeft',
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
                    'MiriamCouchArmrestLeft'
                )}
            </text>
        </Svg>
    )
}

MiriamCouchArmrestLeft.propTypes = propTypes

export default MiriamCouchArmrestLeft
