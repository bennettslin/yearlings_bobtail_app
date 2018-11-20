import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettGateSideOpen = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'BennettGateSideOpen',
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
                    'BennettGateSideOpen'
                )}
            </text>
        </Svg>
    )
}

BennettGateSideOpen.propTypes = propTypes

export default BennettGateSideOpen
