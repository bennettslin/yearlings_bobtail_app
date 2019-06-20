import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BloomCountyPoster = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BloomCountyPoster',
                className
            )}
        >
            <rect
                className={cx(
                    'Cardboard__temporaryRect'
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
                    'BloomCountyPoster'
                )}
            </text>
        </Svg>
    )
}

BloomCountyPoster.propTypes = propTypes

export default BloomCountyPoster
