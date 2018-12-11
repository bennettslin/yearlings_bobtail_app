import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NotHungry = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'NotHungry'
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
                    'NotHungry'
                )}
            </text>
        </Svg>
    )
}

NotHungry.propTypes = propTypes

export default NotHungry
