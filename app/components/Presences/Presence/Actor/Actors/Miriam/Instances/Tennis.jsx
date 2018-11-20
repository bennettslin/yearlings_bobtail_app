import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Tennis = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Tennis'
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
                    'Tennis'
                )}
            </text>
        </Svg>
    )
}

Tennis.propTypes = propTypes

export default Tennis
