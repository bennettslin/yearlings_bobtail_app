import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DateEnding = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'DateEnding'
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
                    'DateEnding'
                )}
            </text>
        </Svg>
    )
}

DateEnding.propTypes = propTypes

export default DateEnding
