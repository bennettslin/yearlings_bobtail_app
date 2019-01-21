import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const MopSopped = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'MopSopped'
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
                    'MopSopped'
                )}
            </text>
        </Svg>
    )
}

MopSopped.propTypes = propTypes

export default MopSopped
