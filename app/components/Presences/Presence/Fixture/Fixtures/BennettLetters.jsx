import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettLetters = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettLetters',
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
                    'BennettLetters'
                )}
            </text>
        </Svg>
    )
}

BennettLetters.propTypes = propTypes

export default BennettLetters
