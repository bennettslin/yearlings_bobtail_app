import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CrowdBackFar = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CrowdBackFar',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'CrowdBackFar'
                )}
            </text>
        </Svg>
    )
}

CrowdBackFar.propTypes = propTypes

export default CrowdBackFar
