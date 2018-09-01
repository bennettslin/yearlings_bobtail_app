import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NohoNeighbourhood = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'NohoNeighbourhood',
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
                    'NohoNeighbourhood'
                )}
            </text>
        </Svg>
    )
}

NohoNeighbourhood.propTypes = propTypes;

export default NohoNeighbourhood
