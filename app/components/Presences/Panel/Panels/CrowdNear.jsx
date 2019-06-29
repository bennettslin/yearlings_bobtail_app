import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const CrowdNear = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CrowdNear',
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
                    'CrowdNear'
                )}
            </text>
        </Svg>
    )
}

CrowdNear.propTypes = propTypes

export default CrowdNear
