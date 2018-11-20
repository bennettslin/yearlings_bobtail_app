import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PorchPlantsLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PorchPlantsLeft',
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
                    'PorchPlantsLeft'
                )}
            </text>
        </Svg>
    )
}

PorchPlantsLeft.propTypes = propTypes;

export default PorchPlantsLeft
