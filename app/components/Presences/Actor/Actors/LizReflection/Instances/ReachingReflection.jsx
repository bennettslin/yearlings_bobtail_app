import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ReachingReflection = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'ReachingReflection'
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
                    'ReachingReflection'
                )}
            </text>
        </Svg>
    )
}

ReachingReflection.propTypes = propTypes

export default ReachingReflection
