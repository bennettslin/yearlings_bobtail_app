import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CinemaPosterRightNormal = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CinemaPosterRightNormal',
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
                    'CinemaPosterRightNormal'
                )}
            </text>
        </Svg>
    )
}

CinemaPosterRightNormal.propTypes = propTypes;

export default CinemaPosterRightNormal
