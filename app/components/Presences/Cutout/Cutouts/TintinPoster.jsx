import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const TintinPoster = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TintinPoster',
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
                    'TintinPoster'
                )}
            </text>
        </Svg>
    )
}

TintinPoster.propTypes = propTypes

export default TintinPoster
