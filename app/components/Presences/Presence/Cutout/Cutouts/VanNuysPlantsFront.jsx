import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const VanNuysPlantsFront = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'VanNuysPlantsFront',
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
                    'VanNuysPlantsFront'
                )}
            </text>
        </Svg>
    )
}

VanNuysPlantsFront.propTypes = propTypes

export default VanNuysPlantsFront
