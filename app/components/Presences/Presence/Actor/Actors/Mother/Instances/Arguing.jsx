import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Arguing = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Arguing'
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
                    'Arguing'
                )}
            </text>
        </Svg>
    )
}

Arguing.propTypes = propTypes

export default Arguing
