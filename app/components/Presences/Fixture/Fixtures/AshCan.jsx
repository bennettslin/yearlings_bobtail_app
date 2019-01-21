import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const AshCan = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'AshCan',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'AshCan'
                )}
            </text>
        </Svg>
    )
}

AshCan.propTypes = propTypes

export default AshCan
