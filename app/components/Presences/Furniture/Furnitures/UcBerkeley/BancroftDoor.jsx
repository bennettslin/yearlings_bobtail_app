import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BancroftDoor = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BancroftDoor',
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
                    'BancroftDoor'
                )}
            </text>
        </Svg>
    )
}

BancroftDoor.propTypes = propTypes;

export default BancroftDoor
