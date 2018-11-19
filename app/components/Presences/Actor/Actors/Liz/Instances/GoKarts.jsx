import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GoKarts = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'GoKarts'
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
                    'GoKarts'
                )}
            </text>
        </Svg>
    )
}

GoKarts.propTypes = propTypes;

export default GoKarts
