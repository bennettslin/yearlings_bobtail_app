import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const YellowTapedGrill = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'YellowTapedGrill',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'YellowTapedGrill'
                )}
            </text>
        </Svg>
    )
}

YellowTapedGrill.propTypes = propTypes

export default YellowTapedGrill
