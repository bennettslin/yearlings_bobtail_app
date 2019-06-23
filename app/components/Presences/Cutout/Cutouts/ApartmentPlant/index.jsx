import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PresenceSvgInjector from 'modules/PresenceSvgInjector'
import apartmentPlant from 'assets/svgs/apartmentPlant.svg'

const propTypes = {
    // From parent.
    className: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    scaleFactor: PropTypes.number
}

const ApartmentPlant = ({
    className, x, y, scaleFactor

}) => {
    return (
        <PresenceSvgInjector
            {...{
                className: cx(
                    'ApartmentPlant',
                    className
                ),
                viewBoxWidth: 1010.23,
                viewBoxHeight: 1840.06,
                x,
                y,
                scaleFactor
            }}
        >
            {apartmentPlant}
        </PresenceSvgInjector>
    )
}

ApartmentPlant.propTypes = propTypes

export default ApartmentPlant
