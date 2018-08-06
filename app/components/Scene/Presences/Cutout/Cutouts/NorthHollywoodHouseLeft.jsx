import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NorthHollywoodHouseLeft = ({

    className,

...other }) => {

    return (
        <g
            className={cx(
                'NorthHollywoodHouseLeft',
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
                    'NorthHollywoodHouseLeft'
                )}
            </text>
        </g>
    )
}

NorthHollywoodHouseLeft.propTypes = propTypes;

export default NorthHollywoodHouseLeft
