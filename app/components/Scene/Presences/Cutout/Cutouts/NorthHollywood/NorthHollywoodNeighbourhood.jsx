import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NorthHollywoodNeighbourhood = ({

    className,

...other }) => {

    return (
        <Svg
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
                    'NorthHollywoodNeighbourhood'
                )}
            </text>
        </Svg>
    )
}

NorthHollywoodNeighbourhood.propTypes = propTypes;

export default NorthHollywoodNeighbourhood
