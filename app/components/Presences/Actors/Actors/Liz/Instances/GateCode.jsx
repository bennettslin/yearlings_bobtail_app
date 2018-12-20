import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GateCode = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'GateCode'
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
                    'GateCode'
                )}
            </text>
        </Svg>
    )
}

GateCode.propTypes = propTypes

export default GateCode
