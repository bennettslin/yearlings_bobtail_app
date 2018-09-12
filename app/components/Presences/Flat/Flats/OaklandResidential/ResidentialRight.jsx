import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ResidentialRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ResidentialRight',
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
                    'ResidentialRight'
                )}
            </text>
        </Svg>
    )
}

ResidentialRight.propTypes = propTypes;

export default ResidentialRight
