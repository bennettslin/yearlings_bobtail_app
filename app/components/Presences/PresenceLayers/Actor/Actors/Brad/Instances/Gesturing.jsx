import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Gesturing = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Gesturing'
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
                    'Gesturing'
                )}
            </text>
        </Svg>
    )
}

Gesturing.propTypes = propTypes

export default Gesturing
