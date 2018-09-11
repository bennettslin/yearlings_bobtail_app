import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PharmacyThought = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PharmacyThought',
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
                    'PharmacyThought'
                )}
            </text>
        </Svg>
    )
}

PharmacyThought.propTypes = propTypes;

export default PharmacyThought
