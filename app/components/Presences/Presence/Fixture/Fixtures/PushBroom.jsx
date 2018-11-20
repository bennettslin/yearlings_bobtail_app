import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PushBroom = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'PushBroom',
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
                    'PushBroom'
                )}
            </text>
        </Svg>
    )
}

PushBroom.propTypes = propTypes

export default PushBroom
