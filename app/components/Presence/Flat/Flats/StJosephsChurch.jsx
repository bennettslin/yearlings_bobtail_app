import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const StJosephsChurch = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'StJosephsChurch',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'StJosephsChurch'
                )}
            </text>
        </Svg>
    )
}

StJosephsChurch.propTypes = propTypes

export default StJosephsChurch
