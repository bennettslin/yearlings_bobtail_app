import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CemeteryBackdrop = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CemeteryBackdrop',
                className
            )}
        >
            <rect
                className={cx(
                    'Backdrop__temporaryRect'
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
                    'CemeteryBackdrop'
                )}
            </text>
        </Svg>
    )
}

CemeteryBackdrop.propTypes = propTypes

export default CemeteryBackdrop
