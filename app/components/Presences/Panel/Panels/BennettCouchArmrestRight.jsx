import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BennettCouchArmrestRight = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettCouchArmrestRight',
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
                    'BennettCouchArmrestRight'
                )}
            </text>
        </Svg>
    )
}

BennettCouchArmrestRight.propTypes = propTypes

export default BennettCouchArmrestRight
