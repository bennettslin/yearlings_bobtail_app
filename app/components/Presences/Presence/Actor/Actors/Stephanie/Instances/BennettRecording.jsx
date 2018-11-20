import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettRecording = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'BennettRecording'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'BennettRecording'
                )}
            </text>
        </Svg>
    )
}

BennettRecording.propTypes = propTypes

export default BennettRecording
