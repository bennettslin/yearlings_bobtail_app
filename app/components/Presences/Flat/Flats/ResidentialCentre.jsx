import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ResidentialCentre = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ResidentialCentre',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'ResidentialCentre'
                )}
            </text>
        </Svg>
    )
}

ResidentialCentre.propTypes = propTypes;

export default ResidentialCentre
