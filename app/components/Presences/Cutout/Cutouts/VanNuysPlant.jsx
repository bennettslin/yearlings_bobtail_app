import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const VanNuysPlant = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'VanNuysPlant',
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
                    'VanNuysPlant'
                )}
            </text>
        </Svg>
    )
}

VanNuysPlant.propTypes = propTypes

export default VanNuysPlant
