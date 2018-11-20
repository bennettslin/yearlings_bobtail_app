import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BrokenHearted = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'BrokenHearted'
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
                    'BrokenHearted'
                )}
            </text>
        </Svg>
    )
}

BrokenHearted.propTypes = propTypes

export default BrokenHearted
