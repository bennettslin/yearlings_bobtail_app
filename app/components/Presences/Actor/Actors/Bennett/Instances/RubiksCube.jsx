import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const RubiksCube = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'RubiksCube'
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
                    'RubiksCube'
                )}
            </text>
        </Svg>
    )
}

RubiksCube.propTypes = propTypes;

export default RubiksCube
