import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TrashCanFront = ({

    className,

...other }) => {

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

TrashCanFront.propTypes = propTypes;

export default TrashCanFront
