import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Jogger = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Jogger'
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
                    'Jogger'
                )}
            </text>
        </Svg>
    )
}

Jogger.propTypes = propTypes

export default Jogger
