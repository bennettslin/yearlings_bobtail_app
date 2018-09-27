import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PublicNearLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PublicNearLeft',
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
                    'PublicNearLeft'
                )}
            </text>
        </Svg>
    )
}

PublicNearLeft.propTypes = propTypes;

export default PublicNearLeft
