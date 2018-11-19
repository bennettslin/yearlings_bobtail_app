import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LeonardCohenPoster = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LeonardCohenPoster',
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
                    'LeonardCohenPoster'
                )}
            </text>
        </Svg>
    )
}

LeonardCohenPoster.propTypes = propTypes;

export default LeonardCohenPoster
