import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const VanNuysPlantsBack = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'VanNuysPlantsBack',
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
                    'VanNuysPlantsBack'
                )}
            </text>
        </Svg>
    )
}

VanNuysPlantsBack.propTypes = propTypes;

export default VanNuysPlantsBack
