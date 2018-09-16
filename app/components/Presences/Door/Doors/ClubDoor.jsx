import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ClubDoor = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ClubDoor',
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
                    'ClubDoor'
                )}
            </text>
        </Svg>
    )
}

ClubDoor.propTypes = propTypes;

export default ClubDoor
