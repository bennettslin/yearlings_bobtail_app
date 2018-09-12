import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CrowdSideNear = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CrowdSideNear',
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
                    'CrowdSideNear'
                )}
            </text>
        </Svg>
    )
}

CrowdSideNear.propTypes = propTypes;

export default CrowdSideNear
