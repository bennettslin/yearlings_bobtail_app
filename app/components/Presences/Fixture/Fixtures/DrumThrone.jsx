import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const DrumThrone = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'DrumThrone',
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
                    'DrumThrone'
                )}
            </text>
        </Svg>
    )
}

DrumThrone.propTypes = propTypes

export default DrumThrone
