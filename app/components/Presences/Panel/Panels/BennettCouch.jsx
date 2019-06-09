import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BennettCouch = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettCouch',
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
                    'BennettCouch'
                )}
            </text>
        </Svg>
    )
}

BennettCouch.propTypes = propTypes

export default BennettCouch
