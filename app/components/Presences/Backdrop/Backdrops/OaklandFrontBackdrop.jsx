import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const OaklandFrontBackdrop = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'OaklandFrontBackdrop',
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
                    'OaklandFrontBackdrop'
                )}
            </text>
        </Svg>
    )
}

OaklandFrontBackdrop.propTypes = propTypes

export default OaklandFrontBackdrop
