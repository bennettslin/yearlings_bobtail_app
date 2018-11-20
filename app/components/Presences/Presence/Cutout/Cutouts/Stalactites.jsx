import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Stalactites = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'Stalactites',
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
                    'Stalactites'
                )}
            </text>
        </Svg>
    )
}

Stalactites.propTypes = propTypes

export default Stalactites
