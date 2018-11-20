import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Cliff = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Cliff'
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
                    'Cliff'
                )}
            </text>
        </Svg>
    )
}

Cliff.propTypes = propTypes

export default Cliff
