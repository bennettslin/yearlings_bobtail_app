import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ResidentialFarRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ResidentialFarRight',
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
                    'ResidentialFarRight'
                )}
            </text>
        </Svg>
    )
}

ResidentialFarRight.propTypes = propTypes;

export default ResidentialFarRight
