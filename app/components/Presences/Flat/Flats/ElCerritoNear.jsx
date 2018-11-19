import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ElCerritoNear = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ElCerritoNear',
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
                    'ElCerritoNear'
                )}
            </text>
        </Svg>
    )
}

ElCerritoNear.propTypes = propTypes;

export default ElCerritoNear
