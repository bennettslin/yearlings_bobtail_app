import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NorthHollywoodNeighbourhood = ({

    className,

...other }) => {

    return (
        <g
            className={cx(
                'NorthHollywoodNeighbourhood',
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
                    'NorthHollywoodNeighbourhood'
                )}
            </text>
        </g>
    )
}

NorthHollywoodNeighbourhood.propTypes = propTypes;

export default NorthHollywoodNeighbourhood
