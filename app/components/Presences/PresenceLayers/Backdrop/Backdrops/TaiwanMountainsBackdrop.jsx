import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TaiwanMountainsBackdrop = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TaiwanMountainsBackdrop',
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
                    'TaiwanMountainsBackdrop'
                )}
            </text>
        </Svg>
    )
}

TaiwanMountainsBackdrop.propTypes = propTypes

export default TaiwanMountainsBackdrop
