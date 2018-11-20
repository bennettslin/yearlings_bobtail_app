import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettDoorInsideOpen = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'BennettDoorInsideOpen',
                className
            )}
        >
            <rect
                className={cx(
                    'Door__temporaryRect'
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
                    'BennettDoorInsideOpen'
                )}
            </text>
        </Svg>
    )
}

BennettDoorInsideOpen.propTypes = propTypes

export default BennettDoorInsideOpen
