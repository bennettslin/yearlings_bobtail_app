import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SpaceColony = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SpaceColony',
                className
            )}
        >
            <rect
                className={cx(
                    'Puppet__temporaryRect'
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
                    'SpaceColony'
                )}
            </text>
        </Svg>
    )
}

SpaceColony.propTypes = propTypes;

export default SpaceColony
