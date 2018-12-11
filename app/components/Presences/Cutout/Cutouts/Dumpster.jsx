import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Dumpster = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'Dumpster',
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
                    'Dumpster'
                )}
            </text>
        </Svg>
    )
}

Dumpster.propTypes = propTypes

export default Dumpster
