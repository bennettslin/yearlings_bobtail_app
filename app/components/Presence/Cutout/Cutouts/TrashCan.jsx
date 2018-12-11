import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TrashCan = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TrashCan',
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
                    'TrashCan'
                )}
            </text>
        </Svg>
    )
}

TrashCan.propTypes = propTypes

export default TrashCan
