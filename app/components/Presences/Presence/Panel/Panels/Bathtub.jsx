import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Bathtub = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'Bathtub',
                className
            )}
        >
            <rect
                className={cx(
                    'Panel__temporaryRect'
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
                    'Bathtub'
                )}
            </text>
        </Svg>
    )
}

Bathtub.propTypes = propTypes

export default Bathtub
