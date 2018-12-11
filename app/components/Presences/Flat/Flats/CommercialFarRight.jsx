import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CommercialFarRight = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CommercialFarRight',
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
                    'CommercialFarRight'
                )}
            </text>
        </Svg>
    )
}

CommercialFarRight.propTypes = propTypes

export default CommercialFarRight
