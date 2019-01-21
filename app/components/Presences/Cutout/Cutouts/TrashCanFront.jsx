import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const TrashCanFront = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TrashCanFront',
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
                    'TrashCanFront'
                )}
            </text>
        </Svg>
    )
}

TrashCanFront.propTypes = propTypes

export default TrashCanFront
