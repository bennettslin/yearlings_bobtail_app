import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TaiwanClouds = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'TaiwanClouds',
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
                    'TaiwanClouds'
                )}
            </text>
        </Svg>
    )
}

TaiwanClouds.propTypes = propTypes;

export default TaiwanClouds
