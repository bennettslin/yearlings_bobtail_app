import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TaiwanMountainsNear = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'TaiwanMountainsNear',
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
                    'TaiwanMountainsNear'
                )}
            </text>
        </Svg>
    )
}

TaiwanMountainsNear.propTypes = propTypes;

export default TaiwanMountainsNear
