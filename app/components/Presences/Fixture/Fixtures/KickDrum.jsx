import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const KickDrum = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'KickDrum',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'KickDrum'
                )}
            </text>
        </Svg>
    )
}

KickDrum.propTypes = propTypes

export default KickDrum
