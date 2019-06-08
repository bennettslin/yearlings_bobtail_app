import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BennettBed = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettBed',
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
                    'BennettBed'
                )}
            </text>
        </Svg>
    )
}

BennettBed.propTypes = propTypes

export default BennettBed
