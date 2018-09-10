import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SpaceStationSketchbook = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SpaceStationSketchbook',
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
                    'SpaceStationSketchbook'
                )}
            </text>
        </Svg>
    )
}

SpaceStationSketchbook.propTypes = propTypes;

export default SpaceStationSketchbook
