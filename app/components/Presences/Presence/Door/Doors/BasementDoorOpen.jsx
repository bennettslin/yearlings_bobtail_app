import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BasementDoorOpen = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'BasementDoorOpen',
                className
            )}
        >
            <rect
                className={cx(
                    'Door__temporaryRect'
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
                    'BasementDoorOpen'
                )}
            </text>
        </Svg>
    )
}

BasementDoorOpen.propTypes = propTypes

export default BasementDoorOpen
