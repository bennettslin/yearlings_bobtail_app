import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Officer = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Officer'
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
                    'Officer'
                )}
            </text>
        </Svg>
    )
}

Officer.propTypes = propTypes

export default Officer
