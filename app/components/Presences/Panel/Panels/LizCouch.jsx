import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const LizCouch = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'LizCouch',
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
                    'LizCouch'
                )}
            </text>
        </Svg>
    )
}

LizCouch.propTypes = propTypes

export default LizCouch
