import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TetherballPole = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'TetherballPole',
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
                    'TetherballPole'
                )}
            </text>
        </Svg>
    )
}

TetherballPole.propTypes = propTypes;

export default TetherballPole
