import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BancroftShrubRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BancroftShrubRight',
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
                    'BancroftShrubRight'
                )}
            </text>
        </Svg>
    )
}

BancroftShrubRight.propTypes = propTypes;

export default BancroftShrubRight
