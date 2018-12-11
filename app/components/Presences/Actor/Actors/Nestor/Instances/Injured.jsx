import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Injured = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Injured'
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
                    'Injured'
                )}
            </text>
        </Svg>
    )
}

Injured.propTypes = propTypes

export default Injured
