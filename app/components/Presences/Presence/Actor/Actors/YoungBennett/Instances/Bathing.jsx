import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Bathing = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Bathing'
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
                    'Bathing'
                )}
            </text>
        </Svg>
    )
}

Bathing.propTypes = propTypes

export default Bathing
