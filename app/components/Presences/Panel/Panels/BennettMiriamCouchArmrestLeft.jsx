import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BennettMiriamCouchArmrestLeft = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettMiriamCouchArmrestLeft',
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
                    'BennettMiriamCouchArmrestLeft'
                )}
            </text>
        </Svg>
    )
}

BennettMiriamCouchArmrestLeft.propTypes = propTypes

export default BennettMiriamCouchArmrestLeft
