import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const AtticCouch = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'AtticCouch',
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
                    'AtticCouch'
                )}
            </text>
        </Svg>
    )
}

AtticCouch.propTypes = propTypes

export default AtticCouch
