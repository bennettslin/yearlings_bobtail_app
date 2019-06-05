import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const MiriamCouchArmrestRight = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'MiriamCouchArmrestRight',
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
                    'MiriamCouchArmrestRight'
                )}
            </text>
        </Svg>
    )
}

MiriamCouchArmrestRight.propTypes = propTypes

export default MiriamCouchArmrestRight
