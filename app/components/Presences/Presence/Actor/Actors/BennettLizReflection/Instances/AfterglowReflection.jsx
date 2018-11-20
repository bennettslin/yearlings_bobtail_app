import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const AfterglowReflection = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'AfterglowReflection'
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
                    'AfterglowReflection'
                )}
            </text>
        </Svg>
    )
}

AfterglowReflection.propTypes = propTypes

export default AfterglowReflection
