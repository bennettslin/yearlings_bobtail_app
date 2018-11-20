import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ApartmentPlant = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ApartmentPlant',
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
                    'ApartmentPlant'
                )}
            </text>
        </Svg>
    )
}

ApartmentPlant.propTypes = propTypes;

export default ApartmentPlant
