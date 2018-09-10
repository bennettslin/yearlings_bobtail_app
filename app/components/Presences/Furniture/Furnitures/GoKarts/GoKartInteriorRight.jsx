import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GoKartInteriorRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GoKartInteriorRight',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'GoKartInteriorRight'
                )}
            </text>
        </Svg>
    )
}

GoKartInteriorRight.propTypes = propTypes;

export default GoKartInteriorRight
