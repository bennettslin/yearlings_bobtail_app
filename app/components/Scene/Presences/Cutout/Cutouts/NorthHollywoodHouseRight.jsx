import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NorthHollywoodHouseRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'NorthHollywoodHouseRight',
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
                    'NorthHollywoodHouseRight'
                )}
            </text>
        </Svg>
    )
}

NorthHollywoodHouseRight.propTypes = propTypes;

export default NorthHollywoodHouseRight
