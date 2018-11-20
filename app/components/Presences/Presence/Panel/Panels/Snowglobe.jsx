import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Snowglobe = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'Snowglobe',
                className
            )}
        >
            <rect
                className={cx(
                    'Panel__temporaryRect'
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
                    'Snowglobe'
                )}
            </text>
        </Svg>
    )
}

Snowglobe.propTypes = propTypes

export default Snowglobe
