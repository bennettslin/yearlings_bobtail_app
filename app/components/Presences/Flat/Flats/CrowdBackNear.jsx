import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CrowdBackNear = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CrowdBackNear',
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
                    'CrowdBackNear'
                )}
            </text>
        </Svg>
    )
}

CrowdBackNear.propTypes = propTypes;

export default CrowdBackNear
