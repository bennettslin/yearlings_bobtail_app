import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ResidentialMiddleLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ResidentialMiddleLeft',
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
                    'ResidentialMiddleLeft'
                )}
            </text>
        </Svg>
    )
}

ResidentialMiddleLeft.propTypes = propTypes;

export default ResidentialMiddleLeft
