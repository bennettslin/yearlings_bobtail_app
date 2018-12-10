import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Sheepish = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Sheepish'
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
                    'Sheepish'
                )}
            </text>
        </Svg>
    )
}

Sheepish.propTypes = propTypes

export default Sheepish
