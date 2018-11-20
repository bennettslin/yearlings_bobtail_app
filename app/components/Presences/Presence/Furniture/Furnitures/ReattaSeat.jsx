import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ReattaSeat = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'ReattaSeat',
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
                    'ReattaSeat'
                )}
            </text>
        </Svg>
    )
}

ReattaSeat.propTypes = propTypes

export default ReattaSeat
