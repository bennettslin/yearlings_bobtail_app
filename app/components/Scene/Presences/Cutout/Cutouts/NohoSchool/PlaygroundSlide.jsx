import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PlaygroundSlide = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PlaygroundSlide',
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
                    'PlaygroundSlide'
                )}
            </text>
        </Svg>
    )
}

PlaygroundSlide.propTypes = propTypes;

export default PlaygroundSlide
