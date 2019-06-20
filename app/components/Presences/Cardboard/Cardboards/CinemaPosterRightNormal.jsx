import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const CinemaPosterRightNormal = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CinemaPosterRightNormal',
                className
            )}
        >
            <rect
                className={cx(
                    'Cardboard__temporaryRect'
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
                    'CinemaPosterRightNormal'
                )}
            </text>
        </Svg>
    )
}

CinemaPosterRightNormal.propTypes = propTypes

export default CinemaPosterRightNormal
