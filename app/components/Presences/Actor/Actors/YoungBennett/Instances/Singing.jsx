import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Singing = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Singing'
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
                    'Singing'
                )}
            </text>
        </Svg>
    )
}

Singing.propTypes = propTypes

export default Singing
