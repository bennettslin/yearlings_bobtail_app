import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const ChristopherLetters = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'ChristopherLetters',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'ChristopherLetters'
                )}
            </text>
        </Svg>
    )
}

ChristopherLetters.propTypes = propTypes

export default ChristopherLetters
