import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OaklandSideBackdrop = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'OaklandSideBackdrop',
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
                    'OaklandSideBackdrop'
                )}
            </text>
        </Svg>
    )
}

OaklandSideBackdrop.propTypes = propTypes

export default OaklandSideBackdrop
