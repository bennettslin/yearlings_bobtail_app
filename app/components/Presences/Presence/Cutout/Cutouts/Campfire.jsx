import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Campfire = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'Campfire',
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
                    'Campfire'
                )}
            </text>
        </Svg>
    )
}

Campfire.propTypes = propTypes

export default Campfire
