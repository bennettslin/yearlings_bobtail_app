import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const BennettPillow = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettPillow',
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
                    'BennettPillow'
                )}
            </text>
        </Svg>
    )
}

BennettPillow.propTypes = propTypes

export default BennettPillow
