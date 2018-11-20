import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const StageLights = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'StageLights',
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
                    'StageLights'
                )}
            </text>
        </Svg>
    )
}

StageLights.propTypes = propTypes

export default StageLights
