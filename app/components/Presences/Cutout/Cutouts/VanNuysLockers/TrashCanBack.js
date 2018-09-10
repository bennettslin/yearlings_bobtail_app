import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TrashCanBack = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'TrashCanBack',
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
                    'TrashCanBack'
                )}
            </text>
        </Svg>
    )
}

TrashCanBack.propTypes = propTypes;

export default TrashCanBack
