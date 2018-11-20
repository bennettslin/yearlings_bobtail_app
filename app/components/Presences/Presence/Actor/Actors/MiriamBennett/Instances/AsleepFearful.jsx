import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const AsleepFearful = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'AsleepFearful'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'AsleepFearful'
                )}
            </text>
        </Svg>
    )
}

AsleepFearful.propTypes = propTypes

export default AsleepFearful
