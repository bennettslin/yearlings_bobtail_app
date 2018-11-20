import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const RecordingConsole = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'RecordingConsole',
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
                    'RecordingConsole'
                )}
            </text>
        </Svg>
    )
}

RecordingConsole.propTypes = propTypes;

export default RecordingConsole
