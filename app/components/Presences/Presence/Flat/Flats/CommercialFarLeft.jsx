import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CommercialFarLeft = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'CommercialFarLeft',
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
                    'CommercialFarLeft'
                )}
            </text>
        </Svg>
    )
}

CommercialFarLeft.propTypes = propTypes

export default CommercialFarLeft
