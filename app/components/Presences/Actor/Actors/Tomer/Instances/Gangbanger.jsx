import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Gangbanger = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Gangbanger'
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
                    'Gangbanger'
                )}
            </text>
        </Svg>
    )
}

Gangbanger.propTypes = propTypes

export default Gangbanger
