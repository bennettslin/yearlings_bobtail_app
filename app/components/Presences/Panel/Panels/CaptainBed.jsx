import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const CaptainBed = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CaptainBed',
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
                    'CaptainBed'
                )}
            </text>
        </Svg>
    )
}

CaptainBed.propTypes = propTypes

export default CaptainBed
