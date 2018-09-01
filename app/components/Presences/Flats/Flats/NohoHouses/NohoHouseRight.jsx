import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NohoHouseRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'NohoHouseRight',
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
                    'NohoHouseRight'
                )}
            </text>
        </Svg>
    )
}

NohoHouseRight.propTypes = propTypes;

export default NohoHouseRight
