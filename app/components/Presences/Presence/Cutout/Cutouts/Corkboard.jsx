import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Corkboard = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'Corkboard',
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
                    'Corkboard'
                )}
            </text>
        </Svg>
    )
}

Corkboard.propTypes = propTypes;

export default Corkboard
