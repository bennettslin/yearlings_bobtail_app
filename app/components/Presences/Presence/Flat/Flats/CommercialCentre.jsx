import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CommercialCentre = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CommercialCentre',
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
                    'CommercialCentre'
                )}
            </text>
        </Svg>
    )
}

CommercialCentre.propTypes = propTypes;

export default CommercialCentre
