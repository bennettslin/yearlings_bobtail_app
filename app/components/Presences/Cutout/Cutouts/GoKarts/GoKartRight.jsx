import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GoKartRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GoKartRight',
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
                    'GoKartRight'
                )}
            </text>
        </Svg>
    )
}

GoKartRight.propTypes = propTypes;

export default GoKartRight
