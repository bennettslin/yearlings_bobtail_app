import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ResidentialNearLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ResidentialNearLeft',
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
                    'ResidentialNearLeft'
                )}
            </text>
        </Svg>
    )
}

ResidentialNearLeft.propTypes = propTypes;

export default ResidentialNearLeft
