import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ComfortingHumiliated = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'ComfortingHumiliated'
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
                    'ComfortingHumiliated'
                )}
            </text>
        </Svg>
    )
}

ComfortingHumiliated.propTypes = propTypes

export default ComfortingHumiliated
