import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const RemovingPants = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'RemovingPants'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'RemovingPants'
                )}
            </text>
        </Svg>
    )
}

RemovingPants.propTypes = propTypes

export default RemovingPants
