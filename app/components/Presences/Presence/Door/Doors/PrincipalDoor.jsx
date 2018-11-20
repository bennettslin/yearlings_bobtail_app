import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PrincipalDoor = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'PrincipalDoor',
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
                    'PrincipalDoor'
                )}
            </text>
        </Svg>
    )
}

PrincipalDoor.propTypes = propTypes

export default PrincipalDoor
