import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettKeyboard = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'BennettKeyboard'
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
                    'BennettKeyboard'
                )}
            </text>
        </Svg>
    )
}

BennettKeyboard.propTypes = propTypes

export default BennettKeyboard
