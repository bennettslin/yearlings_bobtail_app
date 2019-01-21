import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const CheekUnveiled = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'CheekUnveiled'
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
                    'CheekUnveiled'
                )}
            </text>
        </Svg>
    )
}

CheekUnveiled.propTypes = propTypes

export default CheekUnveiled
