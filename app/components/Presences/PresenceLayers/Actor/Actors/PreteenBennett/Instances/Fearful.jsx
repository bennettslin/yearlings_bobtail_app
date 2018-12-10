import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Fearful = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Fearful'
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
                    'Fearful'
                )}
            </text>
        </Svg>
    )
}

Fearful.propTypes = propTypes

export default Fearful
