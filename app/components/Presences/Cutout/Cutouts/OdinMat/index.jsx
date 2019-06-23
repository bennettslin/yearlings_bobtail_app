import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const OdinMat = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'OdinMat',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'OdinMat'
                )}
            </text>
        </Svg>
    )
}

OdinMat.propTypes = propTypes

export default OdinMat
