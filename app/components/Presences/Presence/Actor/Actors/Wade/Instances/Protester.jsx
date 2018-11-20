import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Protester = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Protester'
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
                    'Protester'
                )}
            </text>
        </Svg>
    )
}

Protester.propTypes = propTypes

export default Protester
