import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const LizBed = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'LizBed',
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
                    'LizBed'
                )}
            </text>
        </Svg>
    )
}

LizBed.propTypes = propTypes

export default LizBed
