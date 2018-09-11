import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ArmchairRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ArmchairRight',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'ArmchairRight'
                )}
            </text>
        </Svg>
    )
}

ArmchairRight.propTypes = propTypes;

export default ArmchairRight
