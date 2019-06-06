import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BennettMiriamCouchArmrestRight = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettMiriamCouchArmrestRight',
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
                    'BennettMiriamCouchArmrestRight'
                )}
            </text>
        </Svg>
    )
}

BennettMiriamCouchArmrestRight.propTypes = propTypes

export default BennettMiriamCouchArmrestRight
