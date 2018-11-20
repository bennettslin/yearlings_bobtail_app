import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TaiwanStairsBackdrop = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TaiwanStairsBackdrop',
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
                    'TaiwanStairsBackdrop'
                )}
            </text>
        </Svg>
    )
}

TaiwanStairsBackdrop.propTypes = propTypes

export default TaiwanStairsBackdrop
