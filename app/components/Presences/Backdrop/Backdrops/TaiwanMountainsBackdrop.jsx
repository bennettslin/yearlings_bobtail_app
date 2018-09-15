import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TaiwanMountsBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'TaiwanMountsBackdrop',
                className
            )}
        >
            <rect
                className={cx(
                    'Backdrop__temporaryRect'
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
                    'TaiwanMountsBackdrop'
                )}
            </text>
        </Svg>
    )
}

TaiwanMountsBackdrop.propTypes = propTypes;

export default TaiwanMountsBackdrop
