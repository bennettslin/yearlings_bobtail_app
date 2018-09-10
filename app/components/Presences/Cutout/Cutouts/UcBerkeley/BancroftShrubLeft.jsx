import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BancroftShrubLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BancroftShrubLeft',
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
                    'BancroftShrubLeft'
                )}
            </text>
        </Svg>
    )
}

BancroftShrubLeft.propTypes = propTypes;

export default BancroftShrubLeft
