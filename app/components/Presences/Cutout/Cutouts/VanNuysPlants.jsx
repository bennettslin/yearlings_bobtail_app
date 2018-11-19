import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const VanNuysPlants = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'VanNuysPlants',
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
                    'VanNuysPlants'
                )}
            </text>
        </Svg>
    )
}

VanNuysPlants.propTypes = propTypes;

export default VanNuysPlants
