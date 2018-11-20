import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BedroomDesk = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'BedroomDesk',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'BedroomDesk'
                )}
            </text>
        </Svg>
    )
}

BedroomDesk.propTypes = propTypes

export default BedroomDesk
