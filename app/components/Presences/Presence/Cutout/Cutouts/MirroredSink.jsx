import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const MirroredSink = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'MirroredSink',
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
                    'MirroredSink'
                )}
            </text>
        </Svg>
    )
}

MirroredSink.propTypes = propTypes

export default MirroredSink
