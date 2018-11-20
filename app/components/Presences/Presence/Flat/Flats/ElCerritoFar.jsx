import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ElCerritoFar = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'ElCerritoFar',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'ElCerritoFar'
                )}
            </text>
        </Svg>
    )
}

ElCerritoFar.propTypes = propTypes

export default ElCerritoFar
