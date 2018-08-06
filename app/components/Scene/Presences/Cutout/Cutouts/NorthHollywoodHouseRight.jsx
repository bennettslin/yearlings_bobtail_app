import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NorthHollywoodHouseRight = ({

    className,

...other }) => {

    return (
        <g
            className={cx(
                'NorthHollywoodHouseRight',
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
                    className,
                    'NorthHollywoodHouseRight'
                )}
            </text>
        </g>
    )
}

NorthHollywoodHouseRight.propTypes = propTypes;

export default NorthHollywoodHouseRight
