import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const RecordingBeers = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'RecordingBeers',
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
                    'RecordingBeers'
                )}
            </text>
        </Svg>
    )
}

RecordingBeers.propTypes = propTypes

export default RecordingBeers
