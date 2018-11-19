import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const FamilyHouse = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'FamilyHouse',
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
                    'FamilyHouse'
                )}
            </text>
        </Svg>
    )
}

FamilyHouse.propTypes = propTypes;

export default FamilyHouse
